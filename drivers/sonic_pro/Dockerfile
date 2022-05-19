
FROM sitespeedio/node:ubuntu-20.04-nodejs-14.17.6

ENV TOKEN_SYSTEM="123456789"
ENV REDIS_HOST="0.0.0.0"
ENV REDIS_PORT="6379"

WORKDIR /home/venom_api

COPY api.zip/ /home/venom_api
COPY dist.zip/ /home/venom_api
COPY queue.js/ /home/venom_api

RUN DEBIAN_FRONTEND="noninteractive" apt-get update \
&& DEBIAN_FRONTEND="noninteractive" apt-get --fix-broken install \
&& DEBIAN_FRONTEND="noninteractive" apt-get install -y ffmpeg python make g++ wget git zip \
&& DEBIAN_FRONTEND="noninteractive" npm install -g yarn pm2 \
&& unzip -o api.zip -d /home/venom_api/ \
&& DEBIAN_FRONTEND="noninteractive" yarn install -y \
&& DEBIAN_FRONTEND="noninteractive" yarn add bullmq \
&& rm -rf /home/venom_api/files \
&& rm -rf /home/venom_api/tokens \
&& mkdir /home/venom_api/files \
&& mkdir /home/venom_api/tokens \
&& rm -rf /home/venom_api/.env \
&& chmod -R 777 /home/venom_api/files \
&& chmod -R 777 /home/venom_api/tokens \
&& unzip -o dist.zip -d /home/venom_api/node_modules/sonic-pro/ \
&& rm api.zip dist.zip \
&& mv index.js api.js \
&& mv queue.js index.js

EXPOSE 3001

CMD [ "yarn", "start"]
