from app.db.config import SessionLocal
from sqlalchemy import select
from app.users.models import users

def Create_User(name:str,email:str):
    with SessionLocal() as session:
        user= users(name=name,email=email)
        session.add(user)
        session.commit()

def show_user():
    with SessionLocal() as session:
        stmt = select(users)
        result = session.scalars(stmt)
        return result.all()