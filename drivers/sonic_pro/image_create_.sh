docker rm -f registry.gitlab.com/overall-software/whatsapp-pro/superchat:sonic
docker rmi -f registry.gitlab.com/overall-software/whatsapp-pro/superchat:sonic
docker build -t registry.gitlab.com/overall-software/whatsapp-pro/superchat:sonic .
docker push registry.gitlab.com/overall-software/whatsapp-pro/superchat:sonic