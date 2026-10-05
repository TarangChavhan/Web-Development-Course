from sqlalchemy import Table,Integer,String,MetaData,Column,ForeignKey
from db import engine

metaData = MetaData()

users = Table(
    "user",
    metaData,
    Column("id",Integer,primary_key=True),
    Column("email_id",String,unique=True),
    Column("Password",String)
)

Posts = Table(
    "posts",
    metaData,
    Column("id",Integer,primary_key=True),
    Column("user_id",Integer,ForeignKey(users.c.id)),
    Column("Title",String),
    Column("Description",String)
)

def Create_Tables():
    metaData.create_all(engine)