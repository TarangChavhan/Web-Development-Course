"""Create Users Table

Revision ID: bec767bd94fc
Revises: 
Create Date: 2026-10-25 12:46:08.017098

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'bec767bd94fc'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("id",sa.Integer,primary_key=True),
        sa.Column("name",sa.String(50),nullable=False),
        sa.Column("email",sa.String(255),nullable=False,unique=True)
    )


def downgrade() -> None:
    op.drop_table("users")
