#!/usr/bin/env bash
mkdir -p ssl
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout ssl/nginx.key -out ssl/nginx.crt -subj "/C=US/ST=Utah/L=Provo/O=ACME Tech Inc/CN=www.site.test"
