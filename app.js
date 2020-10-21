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


const employees = [];


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
            } else if (res.employee === "Intern") {
                makeIntern();
            } else if (res.employee === "Engineer") {
                makeEngineer();
            } else if (res.employee === "Exit") {
                if (!fs.existsSync(OUTPUT_DIR)) {
                    fs.mkdirSync(OUTPUT_DIR)
                    console.log(`! Creating output directory ${OUTPUT_DIR}`)
                }
                fs.writeFile(outputPath, render(employees), function (err) {
                    console.log(`! File created in ${outputPath}\n! END\n`)
                    if (err) throw err
                })
                console.log
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
            employees.push(new Manager(res.name, res.id, res.email, res.officeNumber));
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
            employees.push(new Engineer(res.name, res.id, res.email, res.github));
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
            employees.push(new Intern(res.name, res.id, res.email, res.school));
            promptUser();
        })
}


promptUser()