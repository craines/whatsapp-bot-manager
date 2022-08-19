from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi.responses import PlainTextResponse
from docker.errors import NotFound
from whatsapp_bot_manager.api.controllers.CreateContainerController import CreateContainerController, ContainerModel
from whatsapp_bot_manager.api.controllers.ListContainerController import ListContainerController
from whatsapp_bot_manager.api.controllers.GetBotTokenController import GetBotTokenController
from whatsapp_bot_manager.api.controllers.RestartContainerController import RestartContainerController
from whatsapp_bot_manager.api.controllers.StartContainerController import StartContainerController
from whatsapp_bot_manager.api.controllers.StopContainerController import StopContainerController
from whatsapp_bot_manager.api.controllers.RemoveWithSessionContainerController import RemoveWithSessionContainerController
from whatsapp_bot_manager.api.controllers.RemoveContainerController import RemoveContainerController


class CheckApiKeyMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, api_key=''):
        super().__init__(app)
        self.api_key = api_key

    async def dispatch(self, request, call_next):
        if 'api_key' in request.headers:
            print('HEADERS', request.headers['api_key'])
            if self.api_key == request.headers['api_key']:
                return await call_next(request)
            else:
                return PlainTextResponse('Não autorizado', status_code=401)

        if 'api_key' in request.query_params:
            print('QUERY_PARAMS', request.query_params['api_key'])

            if self.api_key == request.query_params['api_key']:
                return await call_next(request)
            else:
                return PlainTextResponse('Não autorizado', status_code=401)
        else:
            return PlainTextResponse('Não autorizado', status_code=401)


app = FastAPI()

origins = []

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(CheckApiKeyMiddleware, api_key='AqZYIvX5l03AxbY55IJSUHS1qINhPxGrSa0CVtPgTPrKmsTqg4')


@app.post("/create")
def create_container(data: ContainerModel):
    return CreateContainerController().post(data)


@app.get("/list")
def list_container():
    return ListContainerController().get()


@app.get("/session/{name}")
def container_session(name: str, response: Response):
    try:
        return GetBotTokenController().get(name)
    except FileNotFoundError as e:
        response.status_code = 404


@app.put("/start/{name}")
def start_container(name: str, response: Response):
    try:
        return StartContainerController().get(name)
    except NotFound as e:
        response.status_code = 404


@app.put("/stop/{name}")
def stop_container(name: str, response: Response):
    try:
        return StopContainerController().get(name)
    except NotFound as e:
        response.status_code = 404


@app.put("/restart/{name}")
def stop_container(name: str, response: Response):
    try:
        return RestartContainerController().get(name)
    except NotFound as e:
        response.status_code = 404


@app.delete("/remove-with-session/{name}")
def remove_container_with_session(name: str, response: Response):
    try:
        return RemoveWithSessionContainerController().get(name)
    except FileNotFoundError:
        response.status_code = 404
    except NotFound:
        response.status_code = 404


@app.delete("/remove/{name}")
def remove_container(name: str, response: Response):
    try:
        return RemoveContainerController().get(name)
    except FileNotFoundError:
        response.status_code = 404
    except NotFound:
        response.status_code = 404

