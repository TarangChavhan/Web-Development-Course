from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from fastapi import Depends
from typing import AsyncGenerator, Annotated
from decouple import config

DB_User = config("DB_User")
DB_Password = config("DB_Password")
DB_Host = config("DB_Host")
DB_Port = config("DB_Port")
DB_Name = config("DB_Name")

DATABASE_URL = f"mysql+aiomysql://{DB_User}:{DB_Password}@{DB_Host}:{DB_Port}/{DB_Name}"

engine = create_async_engine(DATABASE_URL, echo=True, future=True)

async_session = async_sessionmaker(bind=engine, expire_on_commit=False, class_=AsyncSession)

async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        yield session

SessionDep = Annotated[AsyncSession, Depends(get_session)]