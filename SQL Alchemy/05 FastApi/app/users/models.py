from sqlalchemy import String, Integer
from app.db.base import Base
from sqlalchemy.orm import Mapped, mapped_column

class users(Base):
    __tablename__="users"
    id:Mapped[int] = mapped_column("id",Integer, primary_key=True)
    name:Mapped[str] = mapped_column("name",String, nullable=False)
    email:Mapped[str] = mapped_column("email",String,unique=True, nullable=False)

