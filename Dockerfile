FROM nginx:alpine

COPY . /usr/share/nginx/html/

RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; index inex.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
