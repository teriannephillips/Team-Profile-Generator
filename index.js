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
      message: 'Please enter the managers name'
    },
    {
      type: 'number',
      name: 'id',
      message: 'Please enter the managers id number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the managers e-mail address'
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'Please enter the managers office number'
    },
  ]).then(answers => {
    const {name, id, email, officeNum} = answers
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
      message: 'Please enter the engineers name'
    },
    {
      type: 'number',
      name: 'id',
      message: 'Please enter the engineers id number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the engineers e-mail address'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter the engineers github username'
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
      message: 'Please enter the interns name'
    },
    {
      type: 'number',
      name: 'id',
      message: 'Please enter the interns id number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the interns e-mail address'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter the interns school name'
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