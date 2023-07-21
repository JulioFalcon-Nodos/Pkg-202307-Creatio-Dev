create or alter view Ndos_VwContactAgeDays
as
select Id as Ndos_Id, Name as Ndos_Name, BirthDate as Ndos_BirthDate, datediff(month, BirthDate, getdate()) as Ndos_AgeDays
from Contact