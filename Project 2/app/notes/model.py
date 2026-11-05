from sqlalchemy import insert, String,Text, Integer
from app.db.base import Base
from sqlalchemy.orm import Mapped, mapped_column

class Note(Base):
    __tablename__= "Notes"

    id:Mapped[int] = mapped_column("id",Integer, primary_key=True)
    titile:Mapped[str] = mapped_column("titile",String)
    content:Mapped[str] = mapped_column("Content",Text)