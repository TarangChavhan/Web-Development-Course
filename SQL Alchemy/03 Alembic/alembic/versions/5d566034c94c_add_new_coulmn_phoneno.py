"""Add New Coulmn PhoneNo

Revision ID: 5d566034c94c
Revises: bec767bd94fc
Create Date: 2026-10-25 13:31:10.884578

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '5d566034c94c'
down_revision: Union[str, Sequence[str], None] = 'bec767bd94fc'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column("users",sa.Column("PhoneNo",sa.Integer()))

def downgrade() -> None:
    op.drop_column()
