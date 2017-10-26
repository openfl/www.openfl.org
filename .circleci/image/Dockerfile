FROM starefossen/github-pages:147

RUN apk add --update \
    git \
    python \
    python-dev \
    py-pip \
    build-base
RUN pip install awscli --upgrade --user
ENV PATH="~/.local/bin:${PATH}"