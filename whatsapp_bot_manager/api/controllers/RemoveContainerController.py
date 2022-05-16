import docker
from docker.errors import APIError, NotFound
import pathlib
import shutil


class RemoveContainerController:

    def __init__(self):
        self.docker_client = docker.from_env()

    def get(self, name: str):
        try:
            container = self.docker_client.containers.get(name)
            container.remove(force=True)
            return ''
        except FileNotFoundError as e:
            raise e
        except NotFound as e:
            raise e
        except APIError as e:
            raise e
