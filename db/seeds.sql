INSERT INTO department (dept_name)
VALUES 
    ('Management'),
    ('Finance'),
    ('Information and Techonology'),
    ('Engineering'),
    ('Sales'),
    ('Legal'),
    ('Accounting');


INSERT INTO roles (title, salary, dept_id)
VALUES
    ('CEO', 750000, 1),
    ('CFO', 500000, 2),
    ('Developer', 120000, 3),
    ('Electrical Engineer', 100000, 4),
    ('Account Manager', 45000, 5),
    ('Lawyer', 85000, 6),
    ('Accountant', 100000, 7);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Daniel', 'Carazo', 1, 101),
  ('John', 'Baker', 2, NULL),
  ('Melissa', 'Woods', 3, 301),
  ('Cathie', 'Jean', 4, 401),
  ('Jessica', 'Lee', 5, 502),
  ('Linda', 'Brown', 6, NULL),
  ('Bill', 'Waters', 7, 799);
 