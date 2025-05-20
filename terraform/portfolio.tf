# S3 bucket for static website hosting
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

# CloudFront Origin Access Control (OAC)
resource "aws_cloudfront_origin_access_control" "portfolio_oac" {
  name                              = "${var.client}-${var.project}-oac"
  description                       = "OAC for portfolio CloudFront to S3"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# S3 bucket policy for CloudFront OAC
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

# CloudFront cache policy (1 day TTL)
resource "aws_cloudfront_cache_policy" "portfolio_1d" {
  name        = "portfolio-1d-cache"
  default_ttl = 86400
  max_ttl     = 86400
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

# CloudFront distribution
resource "aws_cloudfront_distribution" "portfolio" {
  depends_on          = [aws_acm_certificate_validation.portfolio]
  # aliases             = [aws_acm_certificate.portfolio.domain_name]
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
    cache_policy_id        = aws_cloudfront_cache_policy.portfolio_1d.id
  }

  price_class = "PriceClass_100"
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    # acm_certificate_arn      = aws_acm_certificate_validation.portfolio.certificate_arn
    # ssl_support_method       = "sni-only"
    # minimum_protocol_version = "TLSv1.2_2021"
    cloudfront_default_certificate = true
  }
}

data "aws_route53_zone" "portfolio" {
  name         = "marotodiego.com"
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
  type    = "CNAME"
  ttl     = 60
  records = [aws_cloudfront_distribution.portfolio.domain_name]
}
