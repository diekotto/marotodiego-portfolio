variable "client" {
  description = "The name of the client"
  type        = string
  default     = "marotodiego"
}

variable "project" {
  description = "The name of the project"
  type        = string
  default     = "portfolio"
}

variable "prefix" {
  description = "The prefix for the resources"
  type        = string
  default     = "md"
}

variable "default_region" {
  description = "The default region for the resources"
  type        = string
  default     = "eu-west-1"
}

variable "domain_name" {
  description = "The apex domain you want to redirect, e.g. example.com"
  type        = string
  default     = "marotodiego.com"
}
