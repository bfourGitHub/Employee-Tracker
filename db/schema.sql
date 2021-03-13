DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    name VARCHAR(30) UNIQUE NOT NULL
    );
    
CREATE TABLE role(
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL(10,4) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) references department(id) on delete CASCADE
    );
    
CREATE TABLE employee(
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
	role_id INT NOT NULL,
    FOREIGN KEY (role_id) references role(id) on delete CASCADE,
    manager_id INT,
    FOREIGN KEY (manager_id) references employee(id) on delete set null    
    );
    