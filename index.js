const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const team = [];

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
        message: "What is the team manager's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team manager's email address?",
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

const addNextEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of a team member would you like to add?",
        name: "next",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team",
        ],
      },
    ])
    .then((response) => {
      // if engineer

      //console.log(response)
      if (response.next === "Add an engineer") {
        //    promptForEngineer
        addEngineer();
      }

      // else if intern
      else if (response.next === "Add an intern") {
        //    promptForIntern
        addIntern();
      } else {
        //    use the functionality from page-template to generate the team
        buildPage();
      }
    });
};

const addEngineer = () => {
  console.log("addEngineer");
  inquirer
    .prompt([
      //engineer questions
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
      },
    ])
    .then((response) => {
      // add new engineer to employees array
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );

      team.push(engineer);
      // promptForNextEmployee
      addNextEmployee();
    });
};

const addIntern = () => {
 console.log("addIntern");
  inquirer

    .prompt([
      //intern questions
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
      },
    ])
    .then((response) => {
      // add new intern to employees array
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      team.push(intern);
      // promptForNextEmployee
      addNextEmployee();
    });
};



questionsManager();
