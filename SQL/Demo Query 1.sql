CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
	second_name VARCHAR(50),
    email VARCHAR(100),
    birthdate DATE
);

INSERT INTO employees(first_name,second_name,email,birthdate)
VALUES ('Bhoomika','Singh','bhoomikasingh288@gmail.com','2000-06-30');

SELECT * FROM employees;

INSERT INTO employees(first_name,second_name,email,birthdate)
VALUES ('Yamini','Tomar','tomaryamini04@gmail.com','2001-07-04');

INSERT INTO employees(first_name,second_name,email,birthdate)
VALUES ('Vertika','Verma','vertika31@gmail.com','1998-03-31');

SELECT first_name,second_name FROM employees;

UPDATE employees
SET email = 'bhoomikasingh30@gmail.com'
where id = 1;

SELECT email FROM employees;

DELETE FROM employees
WHERE id = 1;
