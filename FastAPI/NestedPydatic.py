from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()

class Address(BaseModel):
    location:str
    City:str
    State:str
    pin_Code:int

class User(BaseModel):
    name:str
    age:int
    surname:str
    Address:Address

@app.post("/Home")
def Home(data:User):
    return {
        "msg":"Executed Successfully",
        "data":data
    }