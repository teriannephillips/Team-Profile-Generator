const Employee = require('./lib/employee');
//required packages
const inquirer = require("inquirer")
const fs = require('fs');
const { default: Choices } = require("inquirer/lib/objects/choices");

function employeeQuestions(position){
inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the ' +  position + 's name'
    },
    {
      type: 'number',
      name: 'id',
      message: 'Please enter the ' + position  + 's id number'
    },
    { type: 'input',
    name: 'email',
    message: 'Please enter the ' + position  + 's e-mail address'
    },
    { type: 'input',
    name: 'number',
    message: 'Please enter the ' + position  + 's office number'
    },
  ]).then(answers => {
    //call the function to write this employee to the readme file
    writeToFile('index.html', answers);
    positionOption();
  });
}

function positionOption(){
  inquirer.prompt([
      {
        type: 'list',
        name: 'position',
        message: 'Select an option to add another employee',
        choices: ['done', 'engineer', 'intern']
      },
    ]).then(answers => {
      //call the function to ask the employee questions again
      if (answers.position = "done") {
        return;
      }
      else {
      employeeQuestions(answers.position);
      }
  
    });
  }
  //function to write the HTML file
function writeToFile(fileName, answers) {
    console.log(answers);
}
let position = "Manager";
employeeQuestions(position);