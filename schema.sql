DROP DATABASE IF EXISTS c12employees_db;
CREATE DATABASE c12employees_db;

USE c12employees_db;


CREATE TABLE department (
  id INT NOT NULL,
  department_name VARCHAR(45),
  PRIMARY KEY (id) 
);


CREATE TABLE role (
  id INT NOT NULL,
  title VARCHAR(45),
  salary DECIMAL,
  PRIMARY KEY (id) 
);


CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(45),
  last_name VARCHAR(45),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id) 
);




-- CREATE TABLE role (
-- 	id INT,
-- 	title  VARCHAR(30),
-- 	salary  DECIMAL,
-- 	PRIMARY (id)
--   	);

-- CREATE TABLE employee (
-- 	id  INT,
-- 	first_name  VARCHAR(30),
-- 	last_name  VARCHAR(30),
-- 	role_id  INT,
-- 	manager_id  INT, 
-- 	PRIMARY (id)
--   	);

