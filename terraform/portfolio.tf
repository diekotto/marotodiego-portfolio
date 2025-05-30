resource "aws_s3_bucket" "portfolio" {
  bucket        = "${var.prefix}-${var.default_region}-${var.project}"
  force_destroy = true
}

resource "aws_s3_bucket_website_configuration" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

resource "aws_cloudfront_origin_access_control" "portfolio_oac" {
  name                              = "${var.client}-${var.project}-oac"
  description                       = "OAC for portfolio CloudFront to S3"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_s3_bucket_policy" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.portfolio.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.portfolio.arn
          }
        }
      }
    ]
  })
}

resource "aws_cloudfront_cache_policy" "portfolio_cache" {
  name = "portfolio-cache"
  # Cache assets for one year at the edge to minimise TTFB on repeat visits
  default_ttl = 31536000
  max_ttl     = 31536000
  min_ttl     = 0
  parameters_in_cache_key_and_forwarded_to_origin {
    cookies_config {
      cookie_behavior = "none"
    }
    headers_config {
      header_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
    enable_accept_encoding_gzip   = true
    enable_accept_encoding_brotli = true
  }
}

resource "aws_cloudfront_distribution" "portfolio" {
  depends_on          = [aws_acm_certificate_validation.portfolio]
  aliases             = [aws_acm_certificate.portfolio.domain_name]
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "marotodiego.com Portfolio static site"
  default_root_object = "index.html"
  http_version        = "http2and3"

  origin {
    domain_name              = aws_s3_bucket.portfolio.bucket_regional_domain_name
    origin_id                = "portfolio-s3"
    origin_access_control_id = aws_cloudfront_origin_access_control.portfolio_oac.id
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "portfolio-s3"
    viewer_protocol_policy = "redirect-to-https"
    cache_policy_id        = aws_cloudfront_cache_policy.portfolio_cache.id
    compress               = true
  }

  # Use all CloudFront edge locations to improve initial server response time
  # This increases CDN coverage globally, which helps reduce TTFB
  price_class = "PriceClass_All"
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.portfolio.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

data "aws_route53_zone" "portfolio" {
  name         = var.domain_name
  private_zone = false
}

resource "aws_acm_certificate" "portfolio" {
  provider          = aws.cloudfront
  domain_name       = "www.${data.aws_route53_zone.portfolio.name}"
  validation_method = "DNS"
}

resource "aws_route53_record" "portfolio_cert_validation" {
  for_each = { for dvo in aws_acm_certificate.portfolio.domain_validation_options : dvo.domain_name => dvo }

  zone_id = data.aws_route53_zone.portfolio.zone_id
  name    = each.value.resource_record_name
  type    = each.value.resource_record_type
  ttl     = 300
  records = [each.value.resource_record_value]
}

resource "aws_acm_certificate_validation" "portfolio" {
  provider                = aws.cloudfront
  certificate_arn         = aws_acm_certificate.portfolio.arn
  validation_record_fqdns = [for record in aws_route53_record.portfolio_cert_validation : record.fqdn]
}

resource "aws_route53_record" "portfolio" {
  zone_id = data.aws_route53_zone.portfolio.zone_id
  name    = "www"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.portfolio.domain_name
    zone_id                = aws_cloudfront_distribution.portfolio.hosted_zone_id
    evaluate_target_health = false
  }
}

###############################################################################
# 1. Certificate + DNS-validation
###############################################################################
resource "aws_acm_certificate" "redirect_cert" {
  domain_name       = var.domain_name
  validation_method = "DNS"
}

resource "aws_route53_record" "redirect_cert_validation" {
  for_each = { for dvo in aws_acm_certificate.redirect_cert.domain_validation_options : dvo.domain_name => dvo }

  zone_id = data.aws_route53_zone.portfolio.zone_id
  name    = each.value.resource_record_name
  type    = each.value.resource_record_type
  ttl     = 300
  records = [each.value.resource_record_value]
}

resource "aws_acm_certificate_validation" "redirect_cert" {
  certificate_arn         = aws_acm_certificate.redirect_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.redirect_cert_validation : record.fqdn]
}

###############################################################################
# 2. REST API (MOCK integration for 301)
###############################################################################
resource "aws_api_gateway_rest_api" "redirect_api" {
  name = "${var.prefix}-apex-redirect"
  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

# ANY on the ROOT resource
resource "aws_api_gateway_method" "root_any" {
  rest_api_id   = aws_api_gateway_rest_api.redirect_api.id
  resource_id   = aws_api_gateway_rest_api.redirect_api.root_resource_id
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "root_redirect" {
  rest_api_id          = aws_api_gateway_rest_api.redirect_api.id
  resource_id          = aws_api_gateway_rest_api.redirect_api.root_resource_id
  http_method          = aws_api_gateway_method.root_any.http_method
  type                 = "MOCK"
  passthrough_behavior = "WHEN_NO_MATCH"

  request_templates = {
    "application/json" = "{\"statusCode\": 301}"
  }
}

resource "aws_api_gateway_method_response" "root_response" {
  rest_api_id = aws_api_gateway_rest_api.redirect_api.id
  resource_id = aws_api_gateway_rest_api.redirect_api.root_resource_id
  http_method = aws_api_gateway_method.root_any.http_method
  status_code = "301"

  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {
    "method.response.header.Location" = true
  }
}

resource "aws_api_gateway_integration_response" "root_integration_response" {
  rest_api_id = aws_api_gateway_rest_api.redirect_api.id
  resource_id = aws_api_gateway_rest_api.redirect_api.root_resource_id
  http_method = aws_api_gateway_method.root_any.http_method
  status_code = "301"

  response_templates = {
    "application/json" = ""
  }
  response_parameters = {
    # single-quoted string literal for Terraform interpolation
    "method.response.header.Location" = "'https://www.${var.domain_name}'"
  }
}

###############################################################################
# 3. Deployment + Stage
###############################################################################
resource "aws_api_gateway_deployment" "redirect_deployment" {
  rest_api_id = aws_api_gateway_rest_api.redirect_api.id

  # force a new deployment whenever integration changes
  triggers = {
    redeploy = sha1(jsonencode(aws_api_gateway_rest_api.redirect_api))
  }

  depends_on = [
    aws_api_gateway_integration_response.root_integration_response
  ]
}

resource "aws_api_gateway_stage" "redirect_stage" {
  rest_api_id   = aws_api_gateway_rest_api.redirect_api.id
  deployment_id = aws_api_gateway_deployment.redirect_deployment.id
  stage_name    = "prod"
}

####################################################################################
# 4. Custom domain link
####################################################################################

resource "aws_api_gateway_domain_name" "redirect_custom_domain" {
  domain_name              = aws_acm_certificate.redirect_cert.domain_name
  regional_certificate_arn = aws_acm_certificate_validation.redirect_cert.certificate_arn

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_base_path_mapping" "redirect_base_path" {
  domain_name = aws_api_gateway_domain_name.redirect_custom_domain.domain_name
  api_id      = aws_api_gateway_rest_api.redirect_api.id
  stage_name  = aws_api_gateway_stage.redirect_stage.stage_name
}

resource "aws_route53_record" "redirect" {
  zone_id = data.aws_route53_zone.portfolio.zone_id
  name    = var.domain_name
  type    = "A"
  alias {
    name                   = aws_api_gateway_domain_name.redirect_custom_domain.regional_domain_name
    zone_id                = aws_api_gateway_domain_name.redirect_custom_domain.regional_zone_id
    evaluate_target_health = false
  }
}
