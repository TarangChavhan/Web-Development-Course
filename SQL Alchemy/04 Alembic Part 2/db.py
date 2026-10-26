from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DatabaseUrl = "sqlite:///sqlite.db"

engin = create_engine(DatabaseUrl,echo=True)

sessionlocal = sessionmaker(bind=engin,expire_on_commit=False)