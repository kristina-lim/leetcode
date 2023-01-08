# Write your MySQL query statement below
# use as to rename the alias
SELECT emp.name AS Employee
# clause specifies the two tables we want to retrieve data 
FROM Employee emp
# combines the rows from the two tables based on the managerId
JOIN Employee employee ON emp.managerId = employee.id
# filters the rows and only keeps those where the salary of the employee is greater than the salary of their manager
WHERE emp.salary > employee.salary