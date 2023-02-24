const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

function questionsManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the team manager's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the team manager's ID?",
          name: "id",
        },
        {
          type: "input",
          message: "What is the team manager's email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the team manager's office number",
          name: "officeNumber",
        },
      ])
      .then((response) => {
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response.officeNumber
        );
        //console.log(manager);
        team.push(manager);
        addNextEmployee();
      });
  }
