#!/bin/bash

aws s3 sync out/ s3://md-eu-west-1-portfolio/ \
    --cache-control "max-age=0,no-cache,no-store,must-revalidate" \
    --exclude "*" \
    --include "*.html"

aws s3 sync out/ s3://md-eu-west-1-portfolio/ \
    --delete --cache-control 'max-age=31536000, immutable' --exclude '*.html'
