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

  const addNextEmployee = () => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which type of team member would you like to add?",
          name: "next",
          choices: [
            "engineer",
            "intern",
            "I dont want to add any more team members",
          ],
        },
      ])
      .then((response) => {
        // if engineer
        console.log(response)
        if (response.next === "engineer") {
          addEngineer();
        }
        //    promptForEngineer
        // else if intern
        else if (response.next === "intern") {
          addIntern();
        } else {
          buildPage();
        }
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
      });
  };

  const addEngineer = () => {
    console.log("addEngineer")
  inquirer
    .prompt([
      {
        //engineer questions
        type: "input",
            message: "What is the engineer's name?",
            name: "name",
        
      },
      {
        //engineer questions
        type: "input",
            message: "What is the engineer's id?",
            name: "id",
        
      },
      {
        //engineer questions
        type: "input",
            message: "What is the engineer's email?",
            name: "email",
        
      },
      {
        //engineer questions
        type: "input",
            message: "What is the engineer's gitHub account?",
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
      addNextEmployee();
      // promptForNextEmployee
    });
};