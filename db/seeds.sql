INSERT INTO department
    (name)
VALUES
    ('Management'),
    ('Engineering'),
    ('Sales'),
    ('Production'),
    ('Shipping');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Upper', 150000, 1),
    ('Middle', 100000, 1),
    ('Senior', 120000, 2),
    ('Test', 80000, 2),
    ('Director', 90000, 3),
    ('Assistant', 75000, 3),
    ('Manager', 100000, 4),
    ('Testeer', 40000, 4),
    ('Shipper', 45000, 5),
    ('Receving', 35000, 5);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('brent', 'willaims', 1, 1),
    ('jeff', 'herm', 2, NULL),
    ('tarra', 'griffiths', 3, NULL),
    ('emma', 'griffiths', 4, NULL),
    ('emmett', 'daniel', 5, 2);