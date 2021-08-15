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
    ('CEO', 350000, 1),
    ('CFO', 200000, 2),
    ('Developer', 120000, 3),
    ('Electrical Engineer', 100000, 4),
    ('Account Manager', 45000, 5),
    ('Lawyer', 85000, 6),
    ('Accountant', 100000, 7);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Daniel', 'Carazo', 1, 102),
  ('John', 'Baker', 2, NULL),
  ('Melissa', 'Woods', 3, 442),
  ('Cathie', 'Jean', 4, 657),
  ('Jessica', 'Lee', 5, NULL),
  ('Linda', 'Brown', 6, 600),
  ('Bill', 'Waters', 7, NULL);
 