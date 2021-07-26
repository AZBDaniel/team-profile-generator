const db = require("./db/connection");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const table = require("console.table");
const mysql = require("mysql2");
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
                "View ALL Departments",
                "View All Roles",
                "View All Employees",
                "Add Department",
                "Add Role",
                "Add Employees",
                "Quit",
            ],
        },
    ]).then((answers) => {
        if (answers === "View All Departments") {
            viewAllDepartments();
        } else if (answers.list === "View All Roles") {
            viewAllRoles();
        } else if (answers.list === "View All Employees") {
            viewAllEmployees();
        } else if (answers.list === "Add Department") {
            addDepartment();
        } else if (answers.list === "Add Role") {
            addRole();
        } else if (answers.list === "Add Employee") {
            addEmployee();
        } else if (answers.list === "Quit") {
            connection.end();
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
    db.query(
        "SELECT role.title, role.salary, department.name FROM role LEFT JOIN depeartment ON role.department_id = department.id",
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
        "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, manager.first_name AS 'manager_firstname', manager.last_name AS 'manager_lastname' FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manger.id;",
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
            name: "department_name",
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
    prompt([
        {
            name: "role_name",
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
            type: "number",
            message: "What is the department id for this role?",
        },
    ]).then(function (answer) {
        db.query("INSERT INTO role SET ?", [answer], function (err) {
            if (err) throw err;
            console.log("Success");
            employerOption();
        });
    });
}

//function add emmployee
function addEmployee() {
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
            type: "number",
            message: "What is the role id for this employee?",
        },
        {
            name: "manager_id",
            type: "number",
            message: "What is the manager id for this employee?",
        },
    ]).then(function (answer) {
        db.query("INSERT INTO employee SET ?", [answer], function (err) {
            if (err) throw err;
            console.log("Success");
            employerOption();
        });
    });
}

//function update employee role



//function to quit





employerOption();

// default response for any other request
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect((err) => {
    if (err) throw err;
    console.log("Database connected.");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});


// BONUS
// Update employee managers.
// View employees by manager.
// View employees by department.
// Delete departments, roles, and employees.
// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.