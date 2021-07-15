const { prompt } = require("inquirer");
const fs = require("fs");
const buildHtml = require("./src/html-template")

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


//Array for employee information to be pushed into

const teamArry = [];

// Manager Questions contructor

const managerQuestions = [
    {
        type: "input",
        message: "Enter the Manager's Name: ",
        name: "name",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Name of the Manager!");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter the Manager's ID Number: ",
        name: "id",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Managers ID Number!");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter the Manager's Email: ",
        name: "email",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Manager's Email!");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter the Manager's Office Number: ",
        name: "officeNumber",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Manager's Office Number!");
                return false;
            }
        },
    },
];


// Engineer Questions contructor

const engineerQuestions = [
    {
        type: "input",
        message: "Enter the Engineer's Name: ",
        name: "name",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Engineer's Name!");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter the Engineer's ID Number: ",
        name: "id",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Engineer ID Number!");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter the Engineer's Email: ",
        name: "email",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Engineer's Email!");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter the Engineer's GitHub Username: ",
        name: "github",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Engineer's Github Username!");
                return false;
            }
        },
    },
];

// Intern Questions contructor

const internQuestions = [
    {
        type: "input",
        message: "Enter the Intern's Name: ",
        name: "name",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Intern's Name!");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter the Intern's ID Number: ",
        name: "id",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Intern's Id Number!");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter the Intern's Email: ",
        name: "email",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Please enter the Inter's Email!");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter the School the Intern Attends: ",
        name: "school",
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                console.log("Pleases enter the Intern's School Name!");
                return false;
            }
        },
    },
];


//add Teammate constructor
//Referenced Jeremy Lentz & Samantha Malone structure

const addTeammate = [
    {
        type: "list",
        message: "Add an additonal Teammate?",
        name: "addTeammate",
        choices: [
            "Add another Engineer?",
            "Add another Intern?",
            "Are you Finished adding Teammates",
        ],
    },
];

//intial prompt function
function askQuestions() {
    prompt(managerQuestions).then((data) => {
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );
        //push team member information into an array
        teamArry.push(manager);
        addTeamArry();
    });
}

//add additonal engineer from addTeammate

function addEngineer() {
    prompt(engineerQuestions).then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamArry.push(engineer);
        return addTeamArry();
    });
}

//add additional intern from addTeammate

function addIntern() {
    prompt(internQuestions).then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamArry.push(intern);
        return addTeamArry();
    });
}

//add addiotnal members function

function addTeamArry() {
    prompt(addTeammate).then((data) => {
        if (data.addTeammate === "Add another Engineer?") {
            addEngineer();
        } else if (data.addTeammate === "Add another Intern?") {
            addIntern();
        } else {
            console.log(teamArry);
            const teamHtml =
                initHtml();

            const completedHtml = buildHtml(teamHtml);
            writeFile("./dist/index.html", completedHtml);
        }
    });
}

// html design function
function initHtml() {

    let groupTeamMembers = "";
    teamArry.forEach(employee => {
        let title = "";
        let identifyProperty = "";
        if ("github" in employee) {
            title = "Engineer"
            identifyProperty = `<a target="_blank" href="https://www.github.com/${employee.github}"> Github: ${employee.github}</a>`
        } else if
            ("school" in employee) {
            title = "Intern"
            identifyProperty = `School Name: ${employee.school}`
        } else if
            ("officeNumber" in employee) {
            title = "Manager"
            identifyProperty = `Office Number: ${employee.officeNumber}`
        }

        //create html car templates
        groupTeamMembers += `
      <div class="col">
            <div class="card" style="width: 18rem">
                <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>${title}</h4>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item employeeProperties"> Employee ID: <span>${employee.id}</span></li>
                <a href="mailto:${employee.email}" class="list-group-item employeeProperties"> Email: <span>${employee.email}</span></a>
                <li class="list-group-item employeeProperties"> <span>${identifyProperty}</span></li>
                </ul>
            </div>
        </div>
      `
    })
    return groupTeamMembers;
}

// write file function

function writeFile(file, completedHtmlPage) {
    fs.writeFile(file, completedHtmlPage, err => {
        if (err) {
            console.log("ERROR");
            return;
        }
    });
}

askQuestions();

module.exports = [teamArry];