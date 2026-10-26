from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
import os

BASE_URL = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

print(BASE_URL)