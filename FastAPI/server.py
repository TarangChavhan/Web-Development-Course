from fastapi import FastAPI

app = FastAPI()

# Simple Routes 
@app.get("/")
def Home():
    return {
        "Msg":"Working Properly",
        "Status":200
    }

# Get 
@app.get("/about")
def About(Name:str):
    return {
        "Name":Name
    }

@app.get("/user/{user_id}")
def user(user_id):
    return{
        "User is":user_id
    }

