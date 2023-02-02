//required packages
const inquirer = require("inquirer")
const fs = require('fs');
inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the employees name'
    },
    {
      type: 'number',
      name: 'id',
      message: 'Please enter the employees id number'
    },
    { type: 'input',
    name: 'email',
    message: 'Please enter the employees e-mail address'
    },
    { type: 'input',
    name: 'number',
    message: 'Please enter the employees office number'
    },
  ]).then(answers => {
    //call the function to write this employee to the readme file
    writeToFile('index.html', answers);

  });
  //function to write the README file
function writeToFile(fileName, answers) {
    console.log(answers);
}