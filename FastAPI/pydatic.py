from pydantic import BaseModel
from fastapi import FastAPI
app = FastAPI()

class User(BaseModel):
    name:str
    age:int

@app.post("/Hello")
def Home(data:User):
    return{
        "Your info is":data
    }