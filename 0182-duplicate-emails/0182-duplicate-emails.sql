# Write your MySQL query statement below
# specifies the column name we want to choose
SELECT email
# specifies the table we're retrieving data from
FROM Person
# groups the rows by the email column so that all the same emails are grouped together
GROUP BY email
# filters the group and only keeps the group that contains the same email
HAVING COUNT(*) > 1
