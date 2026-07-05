from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    name:str
    email:str
    password:int

class UserResponse(BaseModel):
    name:str
    email:str

@app.get("/",response_model=UserResponse)
def Home():
    return{
        "Msg":"Success",
        "name":"Tarang",
        "email":"testtest@gmail.com",
        "password":12345
    }
