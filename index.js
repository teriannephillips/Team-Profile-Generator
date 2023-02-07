const Employee = require('./lib/employee');
//required packages
const inquirer = require("inquirer")
const fs = require('fs');
const { default: Choices } = require("inquirer/lib/objects/choices");

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
      name: 'number',
      message: 'Please enter the managers office number'
    },
  ]).then(answers => {
    //call the function to write this employee to the readme file
    writeToFile('index.html', answers);
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
    //call the function to write this employee to the readme file
    writeToFile('index.html', answers);
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
    //call the function to write this employee to the readme file
    writeToFile('index.html', answers);
    positionOption();
  });
}
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
      return;
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
//function to write the HTML file
function writeToFile(fileName, answers) {
  console.log(answers);
}