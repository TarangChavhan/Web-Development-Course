from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String
from db import engine

class Base(DeclarativeBase):
    pass

class users(Base):
    id:Mapped[int] = mapped_column(Integer,primary_key=True)
    name:Mapped[str] = mapped_column(String(50),nullable=False)
    email:Mapped[str] = mapped_column(String,nullable=False,unique=True)
    
