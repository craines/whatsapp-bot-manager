docker rm -f registry.gitlab.com/overall-software/whatsapp-pro/superchat
docker rmi -f registry.gitlab.com/overall-software/whatsapp-pro/superchat
docker build -t registry.gitlab.com/overall-software/whatsapp-pro/superchat .
docker push registry.gitlab.com/overall-software/whatsapp-pro/superchat