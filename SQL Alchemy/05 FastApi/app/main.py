from fastapi import FastAPI
from app.users import service as user_Service
from pydantic import BaseModel

app = FastAPI()

class users_create(BaseModel):
    name:str
    email:str

@app.post("/user")
def user_create(user:users_create):
    user_Service.Create_User(name=user.name,email=user.email)
    return {"Sucess":True,
            "Status":"User Created Sucessfully"}

@app.get("/AllUsers")
def getAllUsers():
    result = user_Service.show_user()
    return {
        "UserDetails":result
    }