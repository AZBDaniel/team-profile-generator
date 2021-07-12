const inquirer = require("inquirer");
const fs = require("fs");
const buildHtml = require("./src/html-template")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");