const inquirer = require("inquirer");
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
                console.log("Please enter the ID Number of the Manager!");
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