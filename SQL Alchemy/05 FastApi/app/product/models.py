from app.db.base import Base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Integer

class products(Base):
    __tablename__= "products"
    id:Mapped[int] = mapped_column("id",Integer,primary_key=True)
    name:Mapped[str] = mapped_column("name",String,nullable=False)
    Details:Mapped[str] = mapped_column("Details", String, nullable=False)