import docker
from docker.errors import APIError
from whatsapp_bot_manager.api.controllers.ListContainerController import ListContainerController
import pathlib
from pydantic import BaseModel
from typing import Optional


class ContainerModel(BaseModel):
    image: str
    memory: str
    container_name: str
    token_system: str
    superchat_licence: Optional[str]
    redis_host: str
    redis_port: int


class CreateContainerController:

    def __init__(self):
        self.docker_client = docker.from_env()

    def post(self, data: ContainerModel):
        try:

            port = (int(ListContainerController().get()[0]['port']) + 1) if len(ListContainerController().get()) > 0 else 3001

            path = "%s/volumes/%s" % (pathlib.Path().resolve(), data.container_name)

            environment = [
                "TOKEN_SYSTEM=%s" % data.token_system,
                "SUPERCHAT_LICENSE=%s" % data.superchat_licence,
                "REDIS_HOST=%s" % data.redis_host,
                "REDIS_PORT=%s" % data.redis_port,
                "BOT_NAME=%s" % data.container_name,
            ]

            container = self.docker_client.containers.run(data.image, detach=True, environment=environment,
                                                          mem_limit="%sm" % data.memory,
                                                          name=data.container_name,
                                                          ports={3001: port},
                                                          restart_policy={"Name": "always"},
                                                          volumes=["%s/tokens:/home/venom_api/tokens" % path,
                                                                   "%s/files:/home/venom_api/files" % path])

            return {
                'id': container.id,
                'name': container.name,
                'attrs': container.attrs,
                'created_at': container.attrs['Created'],
                'port': port,
                'status': container.status,
            }
        except APIError as e:
            raise e
