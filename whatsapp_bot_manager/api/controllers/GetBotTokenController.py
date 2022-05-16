import pathlib
import json


class GetBotTokenController:

    def get(self, name):
        try:
            path = "%s/volumes/%s/tokens/undefined.json" % (pathlib.Path().resolve(), name)
            with open(path, 'r') as f:
                return json.load(f)
        except FileNotFoundError as e:
            raise e
