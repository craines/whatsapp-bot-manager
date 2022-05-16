
FROM sitespeedio/node:ubuntu-20.04-nodejs-14.17.6

ENV TOKEN_SYSTEM="123456789"
ENV REDIS_HOST="0.0.0.0"
ENV REDIS_PORT="6379"

ARG SUPERCHAT_LICENSE="${SUPERCHAT_KEY}"

COPY api/ /home/venom_api

WORKDIR /home/venom_api

RUN DEBIAN_FRONTEND="noninteractive" apt-get update \
&& DEBIAN_FRONTEND="noninteractive" apt-get --fix-broken install \
&& DEBIAN_FRONTEND="noninteractive" apt-get install -y ffmpeg python make g++ wget git \
&& DEBIAN_FRONTEND="noninteractive" npm install -g yarn pm2 \
&& DEBIAN_FRONTEND="noninteractive" yarn install -y \
&& rm -rf /home/venom_api/files \
&& rm -rf /home/venom_api/tokens \
&& mkdir /home/venom_api/files \
&& mkdir /home/venom_api/tokens \
&& rm -rf /home/venom_api/.env \
&& chmod -R 777 /home/venom_api/files \
&& chmod -R 777 /home/venom_api/tokens

EXPOSE 3001

RUN echo "LICENSE=${SUPERCHAT_LICENSE}" >> /home/venom_api/.env

CMD [ "yarn", "start"]
