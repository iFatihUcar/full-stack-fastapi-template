"""create Employees table

Revision ID: 54cfbf907930
Revises: 1a31ce608336
Create Date: 2024-11-14 00:20:00.530811

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel.sql.sqltypes
from sqlalchemy.dialects.postgresql import TIMESTAMP, BOOLEAN, NUMERIC



# revision identifiers, used by Alembic.
revision = '54cfbf907930'
down_revision = '1a31ce608336'
branch_labels = None
depends_on = None


def upgrade():
    # Yeni tablo oluşturma
    op.create_table(
        'Employees',
        sa.Column('Identity', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('EmployeeId', sa.Text),
        sa.Column('FirstName', sa.Text),
        sa.Column('LastName', sa.Text),
        sa.Column('Gender', sa.Text),
        sa.Column('Collar', sa.Text),
        sa.Column('EducationLevel', sa.Text),
        sa.Column('EmployeeType', sa.Text),
        sa.Column('MailAddress', sa.Text),
        sa.Column('MobilePhone', sa.Text),
        sa.Column('StartDate', TIMESTAMP(timezone=True)),
        sa.Column('LeaveDate', TIMESTAMP(timezone=True)),
        sa.Column('BirthDate', TIMESTAMP(timezone=True)),
        sa.Column('Hierarchy1', sa.Text),
        sa.Column('Hierarchy2', sa.Text),
        sa.Column('Hierarchy3', sa.Text),
        sa.Column('Hierarchy1Code', sa.Text),
        sa.Column('Hierarchy2Code', sa.Text),
        sa.Column('Hierarchy3Code', sa.Text),
        sa.Column('LocationCode', sa.Text),
        sa.Column('JobClassificationCode', sa.Text),
        sa.Column('Duty', sa.Text),
        sa.Column('DutyCode', sa.Text),
        sa.Column('TypeCode', sa.Text),
        sa.Column('WorkPlace', sa.Text),
        sa.Column('WorkPlaceCode', sa.Text),
        sa.Column('WorkPlaceLocation', sa.Text),
        sa.Column('WorkPlaceLocationCode', sa.Text),
        sa.Column('IsManager', BOOLEAN),
        sa.Column('LeaveReasonV2', sa.Text),
        sa.Column('JobClassificationV2', sa.Text),
        sa.Column('StartDateMonth', sa.Integer, nullable=False),
        sa.Column('LeaveDateMonth', sa.Integer),
        sa.Column('StartDateYear', sa.Integer, nullable=False),
        sa.Column('LeaveDateYear', sa.Integer),
        sa.Column('CostCenterCode', sa.Text),
        sa.Column('CostCenterName', sa.Text),
        sa.Column('TitleGroupCode', sa.Text),
        sa.Column('TitleGroupName', sa.Text),
        sa.Column('FirstManagerName', sa.Text),
        sa.Column('FirstManagerLastName', sa.Text),
        sa.Column('FirstManagerCompanyEmployeeId', sa.Text),
        sa.Column('SecondManagerName', sa.Text),
        sa.Column('SecondManagerLastName', sa.Text),
        sa.Column('SecondManagerCompanyEmployeeId', sa.Text),
        sa.Column('PayrollGroupCode', sa.Text),
        sa.Column('VersionId', sa.Text, nullable=False),
        sa.Column('Status', sa.Integer, nullable=False),
        sa.Column('UpdatedDate', TIMESTAMP(timezone=True), nullable=False),
        sa.Column('CreatedDate', TIMESTAMP(timezone=True), nullable=False),
        sa.Column('CompanyId', sa.Text, nullable=False),
        sa.Column('IsCurrentEmployee', BOOLEAN, nullable=False, server_default='false'),
        sa.Column('JobClassification', sa.Text),
        sa.Column('Age', NUMERIC, server_default='0.0'),
        sa.Column('AgeGroup', sa.Text, server_default="''"),
        sa.Column('CompanyExperience', sa.Text, nullable=False, server_default="''"),
        sa.Column('CompanyExperienceYear', NUMERIC, nullable=False, server_default='0.0'),
        sa.Column('Generation', sa.Text, server_default="''"),
        sa.Column('LeaveReason1', sa.Text),
        sa.Column('LeaveReason2', sa.Text),
        sa.Column('Location', sa.Text, server_default="''"),
        sa.Column('IsTradeUnion', BOOLEAN),
        sa.Column('LeaveType', sa.Text),
        sa.Column('LeavingIn1Year', BOOLEAN, nullable=False, server_default='false'),
        sa.Column('LeavingIn2Month', BOOLEAN, nullable=False, server_default='false'),
        sa.Column('LeavingIn6Month', BOOLEAN, nullable=False, server_default='false'),
        sa.Column('Level', sa.Text),
        sa.Column('PerformanceLevel', sa.Text),
        sa.Column('PerformancePoint', sa.Integer),
        sa.Column('Pir', sa.Text),
        sa.Column('PotentialLevel', sa.Text),
        sa.Column('PotentialPoint', sa.Integer),
        sa.Column('Salary', NUMERIC),
        sa.Column('SalaryLevel', sa.Text),
        sa.Column('CompanyName', sa.Text),
        sa.Column('IntegrationType', sa.Text),
        sa.Column('SourceCompanyId', sa.Text),
        sa.Column('SourceCompanyName', sa.Text),
        sa.Column('Unique', sa.Text, nullable=False, server_default="''"),
        sa.Column('LeaveReasonV3', sa.Text)
    )

def downgrade():
    # Tabloyu geri almak için
    op.drop_table('Employees')
