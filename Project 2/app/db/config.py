from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
import os

Base_Dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

db_path = os.path.join(Base_Dir,"Sqllite.db")

Database_Url = f"sqlite+aiosqlite:///{db_path}"

engine = create_async_engine(Database_Url, echo= True)

async_session = async_sessionmaker(bind=engine, expire_on_commit=False)