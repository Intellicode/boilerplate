FROM nginx
COPY public /usr/share/nginx/html
COPY build /usr/share/nginx/html
