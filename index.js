//required modules I created
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { writeToFile } = require('./src/generateHTML');
//required packages others have created
const inquirer = require("inquirer")
const fs = require('fs');
const { default: Choices } = require("inquirer/lib/objects/choices");
//global variables
let employeeArray = [];
//function to ask the manager questions
function managerQuestions() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the managers name',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the managers id number',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the managers e-mail address',
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log('Please enter an email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'Please enter the managers office number',
      validate: nameInput => {
        if ((nameInput)) {

          return true;
        } else {
          console.log('Please enter an office number!')
          return false;
        }
      }
    },
  ]).then(answers => {
    const { name, id, email, officeNum } = answers
    const manager = new Manager(name, id, email, officeNum);
    addEmployee(manager);
    positionOption();
  });
}
//function to ask the engineer questions
function engineerQuestions() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the engineers name',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the engineer's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the engineers id number',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the engineer's id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the engineers e-mail address',
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log('Please enter an email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter the engineers github username',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the engineer's github username!");
          return false;
        }
      }
    },
  ]).then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    addEmployee(engineer);
    positionOption();
  });
}
//function to ask the intern questions
function internQuestions() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the interns name',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Intern's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the interns id number',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the intern's id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the interns e-mail address',
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log('Please enter an email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter the interns school name',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the intern's school name!");
          return false;
        }
      }
    },
  ]).then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    addEmployee(intern);
    positionOption();
  });
}
//function to determine if more employees need to be added and if so which one (engineer, intern or done)
function positionOption() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'position',
      message: 'Select an option to add another employee',
      choices: ['done', 'engineer', 'intern']
    },
  ]).then(answers => {
    //call the function to ask the employee questions again
    console.log(answers.position);
    if (answers.position == "done") {
      //runs the function to write to the HTML file when they select done
      return writeToFile(employeeArray);
    }
    else if (answers.position == "engineer") {
      //ask the engineer questions
      engineerQuestions();
    }
    else if (answers.position == "intern") {
      //ask the intern questions
      internQuestions();
    }

  });
}
managerQuestions();
//function to add employee to the array
function addEmployee(data) {
  employeeArray.push(data);
}