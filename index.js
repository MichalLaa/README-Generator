const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is you GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },

    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Write your description of your project:"
    },

    {
        type: "input",
        name: "github",
        message: "What is you GitHub username?"
    },

    {
        type: "list",
        name: "license",
        message: "What license does our project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GLP3.0", "BSD2", "BSD3", "None"]
    },

    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },

    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },

    {
        type: "input",
        name: "usage",
        message: "What is the proper usage of this repo?"
    },

    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Generating.... Please wait....");
        writeToFile("./utils/sampleREADME.md", generateMarkdown({ ...inquirerAnswers }));
    })

}

// function call to initialize program
init();
