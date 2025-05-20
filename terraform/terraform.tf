terraform {
  backend "s3" {
    bucket = "marotodiego.com-eu-west-1-terraform"
    key    = "portfolio/terraform.tfstate"
    region = "eu-west-1"
  }
  required_providers {
    aws = {
      source  = "registry.opentofu.org/hashicorp/aws"
      version = "5.98.0"
    }
  }
}

locals {
  tags = {
    Client      = var.client
    Project     = var.project
    Environment = "production"
    Deployment  = "terraform"
  }
}

provider "aws" {
  region = var.default_region
  default_tags {
    tags = local.tags
  }
}

provider "aws" {
  alias  = "cloudfront"
  region = "us-east-1"
  default_tags {
    tags = local.tags
  }
}
