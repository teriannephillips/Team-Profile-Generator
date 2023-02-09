const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { generatePage } = require('./src/generateHTML');
//required packages
const inquirer = require("inquirer")
const fs = require('fs');
const { default: Choices } = require("inquirer/lib/objects/choices");
const { writeToFile } = require('./src/generateHTML');
let employeeArray = [];

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
    const manager = new Manager(name, id, email, officeNum
    );
    addEmployee(manager);
    positionOption();
  });
}
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
function positionOption() {
  console.log(employeeArray)
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
      // need team array
      console.log(generatePage(employeeArray))
      console.log(employeeArray)
      return writeToFile(employeeArray);
    }
    else if (answers.position == "engineer") {
      engineerQuestions();
    }
    else if (answers.position == "intern") {
      internQuestions();
    }

  });
}
managerQuestions();
//function to add employee to the array
function addEmployee(data) {
employeeArray.push(data);
}
//function to write the HTML file
//generatePage(employeeArray);
// function writeToFile(fileName, answers) {
//   console.log(answers);
// }