from app.db.config import async_session
from app.notes.model import Note
from sqlalchemy import select
from fastapi import HTTPException

async def Create_notes(titile:str,content:str):
    async with async_session() as session:
        note = Note(titile=titile,content=content)
        session.add(note)
        await session.commit()
        await session.refresh(note)
        return note

async def Get_notes(note_id:int):
    async with async_session() as session:
        note = await session.get(note)
        if note is None:
            raise HTTPException(status_code=404,detail="Note Not Found")
        return note

async def get_all_notes():
    async with async_session() as session:
        stmt = select(Note)
        notes = await session.scalar(stmt)
        return notes.all()

async def Update_Notes(note_id:int,new_titile:str,new_content:str):
    async with async_session() as session:
        note = await session.get(Note, note_id)
        if note is None:
            raise HTTPException(status_code=404, detail="Note Not Found")
        note.titile = new_titile
        note.content = new_content
        await session.commit()
        await session.refresh(note)
        return note