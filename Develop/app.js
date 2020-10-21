const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Declare Global Variables

let manager;
let engineer;
let intern;

let team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// TODO: Comment this
function clearTeam() {
    team = [];
    clearManager();
    clearEngineer();
    clearIntern();
}

// TODO: Comment this
function clearManager() {
    manager = {
        name: "",
        id: "",
        email: "",
        officeNumber: ""
    }
}

// TODO: Comment this
function clearEngineer() {
    engineer = {
        name: "",
        id: "",
        email: "",
        github: ""
    }
}

// TODO: Comment this
function clearIntern() {
    intern = {
        name: "",
        id: "",
        email: "",
        school: ""
    }
}



function promptUser() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                message: "What type of employee do you want to create or quit the program?",
                choices: [
                    "Manager",
                    "Intern",
                    "Engineer",
                    "Exit"
                ]
            }
        ])
        .then((res) => {
            if (res.employee === "Manager") {
                makeManager();
                clearManager();
            } else if (res.employee === "Intern") {
                makeIntern();
                clearIntern();
            } else if (res.employee === "Engineer") {
                makeEngineer();
                clearEngineer();
            } else {
                clearTeam();
                return;
            }
        });
};

// TODO: Comment this 
function makeManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your Manager?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the id of your Manager?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the email of your Manager?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the officeNumber of your Manager?"
            }
        ])
        .then((res) => {
            manager.name = res.name;
            manager.id = res.id;
            manager.email = res.email;
            manager.officeNumber = res.officeNumber;
            team.push(manager);
            console.log(team);
            promptUser();
        })
}

// TODO: Comment this 
function makeEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your Engineer?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the id of your Engineer?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the email of your Engineer?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the github of your Engineer?"
            }
        ])
        .then((res) => {
            engineer.name = res.name;
            engineer.id = res.id;
            engineer.email = res.email;
            engineer.github = res.github;
            team.push(engineer);
            promptUser();
        })
}

// TODO: Comment this 
function makeIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your Intern?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the id of your Intern?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the email of your Intern?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the school of your Intern?"
            }
        ])
        .then((res) => {
            intern.name = res.name;
            intern.id = res.id;
            intern.email = res.email;
            intern.school = res.school;
            team.push(intern);
            promptUser();
        })
}


promptUser();

console.log(team);
// .then(function (answers) {

//     return writeFileAsync("team.html", render(answers));
// })
// .then(function () {
//     console.log("Successfully wrote to team.html");
// })
// .catch(function (err) {
//     console.log(err);
// });

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
