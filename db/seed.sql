USE employeeDB;

insert into department (name)
values 
("Design"),
("Engineering"),
("Human Resources"),
("Accounting");

insert into role (title, salary, department_id)
values 
("Principal Architect", 250000, 1),
("Associate Architect", 120000, 1),
("Architectural Designer", 85000, 1),
("Lead Engineer", 145000, 2),
("Engineer", 90000, 2),
("Director, Human Resources", 100000, 3),
("Human Resources Analyst" 65000, 3),
("Director, Accounting", 120000, 4),
("Accountant", 75000, 4);

insert into employee (first_name, last_name, role_id, manager_id)
values
("Jim", "Olsen", 1, null),
("Tom", "Kundig", 1, null),
("Josh", "Brincko", 2, 1),
("Brooke", "Davis", 3, 1),
("Lillian", "Hancock", 4, null),
("Emma", "Densmore", 5, 4),
("Samantha", "Abernathy", 6, null)
("Mary", "Crawley", 7, 6),
("Tom", "Branson", 8, null),
("Niles", "Crane", 9, 8),
("Mindy", "Lahiri", 9,8);