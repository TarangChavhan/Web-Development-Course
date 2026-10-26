from db import engin
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase
from sqlalchemy import String, Integer

class Base(DeclarativeBase):
    pass

class users(Base):
    __tablename__="users"
    id:Mapped[int] = mapped_column("id",Integer,primary_key=True)
    name:Mapped[str] = mapped_column("name",String,nullable=False)
    roll_no:Mapped[int] = mapped_column("roll_no",Integer,unique=True,nullable=False)