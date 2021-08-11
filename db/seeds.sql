INSERT INTO department (name)
VALUES 
    ('Management'),
    ('Engineer'),
    ('Information Technology'),
    ('Sales');

INSERT INTO roles (title, salary, dept_id)
VALUES
    ('Manager', 150000, 1),
    ('Electrical Engineer', 110000, 2),
    ('Developer', 90000, 3),
    ('Account Manager', 70000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Darcie', 'Horner', 1, NULL),
    ('Brad', 'Nolan', 2, 201),
    ('Wilson', 'Fernandez', 3, 310),
    ('Meg', 'Magana', 3, 415);