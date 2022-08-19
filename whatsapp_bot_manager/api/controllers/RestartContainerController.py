import docker
from docker.errors import APIError


class RestartContainerController:

    def __init__(self):
        self.docker_client = docker.from_env()

    def get(self, name: str):
        try:
            container = self.docker_client.containers.get(name)
            return container.restart()
        except APIError as e:
            raise e
