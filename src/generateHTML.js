const fs = require('fs');

const managerSection = (data) => {
    return `<section class="manager">
    <h1>Manager</h1>
    <h3>Name: ${data[0].name}</h3>
    <h3>Employee Id: ${data[0].id}</h3>
    <h3>E-mail: ${data[0].email}</h3>
    <h3>Office Number: ${data[0].officeNum}</h3>
    </section>`
}

const employeeSection = (data) => {
    let employeeData ="";
    for (let i = 0; i < data.length; i++) {
        if (data[i].github) {
            console.log(data[i].name);
            employeeData = employeeData.concat(`<section class="engineer">
           <h1>Engineer</h1>
           <h3>Name: ${data[i].name}</h3>
           <h3>Employee Id: ${data[i].id}</h3>
           <h3>E-mail: ${data[i].email}</h3>
           <h3>Github Username: ${data[i].github}</h3>
           </section>`)
        } else if (data[i].school) {
            employeeData = employeeData.concat(`<section class="intern">
           <h1>Intern</h1>
           <h3>Name: ${data[i].name}</h3>
           <h3>Employee Id: ${data[i].id}</h3>
           <h3>E-mail: ${data[i].email}</h3>
           <h3>School: ${data[i].school}</h3>
           </section>`)
        }
    }
    return employeeData;
}

const generatePage = data => {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
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
module.exports = { writeToFile, generatePage };
