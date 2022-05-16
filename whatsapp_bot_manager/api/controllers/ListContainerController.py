import docker
from docker.errors import APIError


class ListContainerController:

    def __init__(self):
        self.docker_client = docker.from_env()

    def get(self):
        try:
            try:
                containers = []
                list = self.docker_client.containers.list(all=True)
                for item in list:
                    if 'bot' in item.name:
                        containers.append(
                            {
                                'id': item.id,
                                'name': item.name,
                                'created_at': item.attrs['Created'],
                                'stop_at': item.attrs['State']['FinishedAt'],
                                'port': item.attrs['HostConfig']['PortBindings']['3001/tcp'][0]['HostPort'] if
                                item.attrs['HostConfig']['PortBindings']['3001/tcp'][0]['HostPort'] else '',
                                'status': item.status,
                            }
                        )

                containers.sort(key=lambda item: item.get('port'), reverse=True)
                return containers
            except APIError as e:
                raise e
        except APIError as e:
            raise e
