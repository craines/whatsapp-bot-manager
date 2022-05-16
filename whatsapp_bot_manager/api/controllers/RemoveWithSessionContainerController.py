import docker
from docker.errors import APIError, NotFound
import pathlib
import shutil


class RemoveWithSessionContainerController:

    def __init__(self):
        self.docker_client = docker.from_env()

    def get(self, name: str):
        try:
            path = "%s/volumes/%s" % (pathlib.Path().resolve(), name)
            container = self.docker_client.containers.get(name)
            container.remove(force=True)
            shutil.rmtree(path)
            return ''
        except FileNotFoundError as e:
            raise e
        except NotFound as e:
            raise e
        except APIError as e:
            raise e
