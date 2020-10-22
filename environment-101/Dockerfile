FROM fedora:28

WORKDIR /var/www/html

RUN dnf -y update && dnf clean all

RUN dnf install -y \
    net-tools \
    procps

COPY . /var/www/html

ENTRYPOINT ["./docker-entrypoint.sh"]

