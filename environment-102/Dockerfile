FROM fedora:28

WORKDIR /var/www/html

RUN dnf -y update && dnf clean all

RUN dnf install -y \
    net-tools \
    procps \
    gcc \
    python3-devel \
    nginx \
    screen \
    unzip \
    wget \
    nodejs \
    && dnf clean all \
    && npm update -g \
    && npm install -g n \
    && npm install -g serve \
    && npm cache clean -f \
    && n stable \
    && pip3 install --upgrade setuptools \
    && pip3 install --upgrade pip

COPY . /var/www/html

ENTRYPOINT ["./docker-entrypoint.sh"]

