# Write your MySQL query statement below
# select everything from the Person table
# SELECT * FROM Person 
# SELECT * FROM Person JOIN Address ON personId = Address.personId;
SELECT p.firstName, p.lastName, a.city, a.state
FROM Person p
LEFT JOIN Address a ON p.personId = a.personId
