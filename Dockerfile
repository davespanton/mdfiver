# MDFiver Application
#
# VERSION 0.0.1

FROM quay.io/davespanton/nodejs
MAINTAINER Dave Spanton

RUN mkdir -p /opt/mdfiver

ADD ./package.json /opt/mdfiver/package.json
ADD ./node_modules /opt/mdfiver/node_modules
ADD ./app /opt/mdfiver/app

WORKDIR /opt/mdfiver

EXPOSE 3000
