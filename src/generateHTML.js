//required packages
const fs = require('fs');
//creates and returns the string literal for the manager data
const managerSection = (data) => {
    return `
    <div class="card "style="width: 18rem; min-height:15rem; margin: 4%">
        <div class="card-body">
            <div class="card-top">
                <h3 class="card-title">${data[0].name}</h3>
                <h5 class="card-subtitle">Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${data[0].id}</li>
                <li class="list-group-item">E-mail: <a href="mailto:${data[0].email}">${data[0].email}</a></li>
                <li class="list-group-item">Tel: ${data[0].officeNum}</li>
            </ul>
        </div>
    </div>`
}
//creates and returns the string literal for the rest of the employee data
const employeeSection = (data) => {
    let employeeData = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].github) {
            employeeData = employeeData.concat(`
            <div class="card "style="width: 18rem; min-height:15rem; margin: 4%">
                <div class="card-body">
                    <div class="card-top">
                        <h3 class="card-title">${data[i].name}</h3>
                        <h5 class="card-subtitle">Engineer</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${data[i].id}</li>
                        <li class="list-group-item">E-mail: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
                        <li class="list-group-item">Github: <a href ="https://github.com/${data[i].github}">${data[i].github}</a></li>
                    </ul>
                </div>
            </div > `)
        } 
        else if (data[i].school) {
            employeeData = employeeData.concat(`
            <div class="card "style="width: 18rem; min-height:15rem; margin: 4%">
                <div class="card-body">
                    <div class="card-top">
                        <h3 class="card-title">${data[i].name}</h3>
                        <h5 class="card-subtitle">Intern</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${data[i].id}</li>
                        <li class="list-group-item">E-mail: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
                        <li class="list-group-item">School: ${data[i].school}</li>
                    </ul>
                </div>
            </div > `)
        }   
    }
    return employeeData;
}
//generates the html page and added the string literals for manager and employees
const generatePage = data => {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <link rel="stylesheet" href="./style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
        <h1>Team Page</h1>
        </header>
        <div class="content">
                ${managerSection(data)}
                ${employeeSection(data)}
        </div>
    </body>
</html>
`};
//function to write the HTML file
function writeToFile(data) {
    fs.writeFile('./dist/index.html', generatePage(data), err => {
        err ? console.error(err) : console.log('Success!')
    });
}
module.exports = { writeToFile, generatePage};
