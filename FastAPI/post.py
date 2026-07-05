from fastapi import FastAPI

app = FastAPI()

@app.post("/one")
def createuser(name:str,age:int):
    return{
        "name":name,
        "age":age
    }

@app.post("/many")
def createuser(user:dict):
    return{
        "msg":"Done The API",
        "Success":True,
        "info":user
    }
