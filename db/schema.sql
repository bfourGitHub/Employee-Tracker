DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department(
	id INT NOT NULL,
    PRIMARY KEY(id),
    name VARCHAR(30)
    );
    
CREATE TABLE role(
	id INT NOT NULL,
    PRIMARY KEY(id),
    title VARCHAR(30),
    salary DECIMAL(10,4),
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) references department(id) on delete CASCADE
    );
    
CREATE TABLE employee(
	id INT NOT NULL,
    PRIMARY KEY(id),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
	role_id INT NOT NULL,
    FOREIGN KEY (role_id) references role(id) on delete CASCADE,
    manager_id INT,
    FOREIGN KEY (manager_id) references employee(id) on delete set null    
    );
    