from sqlalchemy import insert, select, update, delete
from db import engine
from tables import users, Posts

# Create
def AddUser(email:str,password:str):
    with engine.connect() as conn:
        stmt = insert(users).values(email_id=email, Password = password)
        conn.execute(stmt)
        conn.commit()

def AddPost(user:int,title:str,Description:str):
    with engine.connect() as conn:
        stmt = insert(Posts).values(user_id =  user, Title  = title, Description =  Description)
        conn.execute(stmt)
        conn.commit()

# Read
def Select_All():
    with engine.connect() as conn:
        stmt = select(users)
        result = conn.execute(stmt).fetchall()
        return result

def selcet_byID(userid: int):
    with engine.connect() as conn:
        stmt = select(users).where(userid==users.c.id)
        result = conn.execute(stmt).first()
        return result

def select_post_by_user(userid:int):
    with engine.connect() as conn:
        stmt = select(Posts).where(Posts.c.user_id==userid)
        result = conn.execute(stmt).fetchall()
        return result

#Update
def Update_Email(userid:int,new_email:str):
    with engine.connect() as conn:
        stmt = update(users).where(userid==users.c.id).values(email_id=new_email)
        conn.execute(stmt)
        conn.commit()

# Delete 
def Delete_post(post_id:int):
    with engine.connect() as conn:
        stmt = delete(Posts).where(post_id==Posts.c.id)
        conn.execute(stmt)
        conn.commit()
        