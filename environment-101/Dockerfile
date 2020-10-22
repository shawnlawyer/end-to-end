FROM fedora:28

WORKDIR /var/www/html

RUN dnf -y update && dnf clean all

COPY . /var/www/html

ENTRYPOINT ["./docker-entrypoint.sh"]

