const db = require("./db/connection");
const table = require("console.table");
const { prompt } = require("inquirer");


//function init


//function to load main prompt
//pompt user what option they want to search with
function employerOption() {
    prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "list",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add Department",
                "Add Role",
                "Add Employees",
                "Quit",
            ],
        },
    ]).then((answers) => {
        if (answers.list === "View All Departments") {
            viewAllDepartments();
        } else if (answers.list === "View All Roles") {
            viewAllRoles();
        } else if (answers.list === "View All Employees") {
            viewAllEmployees();
        } else if (answers.list === "Add Department") {
            addDepartment();
        } else if (answers.list === "Add Role") {
            addRole();
        } else if (answers.list === "Add Employees") {
            addEmployee();
        } else if (answers.list === "Quit") {
            db.end();
        }
    });
}


//function to view all departments
function viewAllDepartments() {
    db.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        employerOption();
    });
}

//function to view all roles
function viewAllRoles() {
    console.log("I am here")
    db.query(
        "SELECT role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            employerOption();
        }
    );
}

//function to view all employees
function viewAllEmployees() {
    db.query(
        "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, manager.first_name AS 'manager_firstname', manager.last_name AS 'manager_lastname' FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id;",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            employerOption();
        }
    );
}

//function add department
function addDepartment() {
    prompt([
        {
            name: "name",
            type: "input",
            message: "What is the name of the department you'd like to add?",
        },
    ]).then(function (answer) {
        db.query("INSERT INTO department SET ?", [answer], function (err) {
            if (err) throw err;
            console.log("Success");
            employerOption();
        });
    });
}

//function add role
function addRole() {
    db.query("select id, name from department", (err, department) => {

        prompt([
            {
                name: "title",
                type: "input",
                message: "What is the name of the role you'd like to add?",
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary for this role?",
            },
            {
                name: "department_id",
                type: "list",
                choices: department.map(x => ({ name: x.name, value: x.id })),
                message: "What is the department id for this role?",
            },
        ]).then(function (answer) {
            db.query("INSERT INTO role SET ?", [answer], function (err) {
                if (err) throw err;
                console.log("Success");
                employerOption();
            });
        });
    })
}

//function add emmployee
function addEmployee() {
    db.query("select id, title from role", (err, role) => {
        db.query("select id, last_name from employee", (err, manager) => {

            prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "What is the first name of the employee you'd like to add?",
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "What is the last name of the employee you'd like to add?",
                },
                {
                    name: "role_id",
                    type: "list",
                    choices: role.map(x => ({ name: x.title, value: x.id })),
                    message: "What is the role id for this employee?",
                },
                {
                    name: "manager_id",
                    type: "list",
                    choices: manager.map(x => ({ name: x.last_name, value: x.id })),
                    message: "What is the manager id for this employee?",
                },
            ]).then(function (answer) {
                db.query("INSERT INTO employee SET ?", [answer], function (err) {
                    if (err) throw err;
                    console.log("Success");
                    employerOption();
                });
            });
        })
    })
}

//function update employee role



employerOption();

// Start server after DB connection
db.connect((err) => {
    if (err) throw err;
    console.log("Database connected.");
});


// BONUS
// Update employee managers.
// View employees by manager.
// View employees by department.
// Delete departments, roles, and employees.
// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.