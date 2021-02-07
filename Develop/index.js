// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const generateMarkdown = require('./utils/generateMarkdown');
const { rejects } = require('assert');
const { resolve } = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'name',
    message: 'Whats the name of your Project? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please Enter a Project name! (Required)');
            return false
        }
    } 
}, 
{
    type: 'confirm',
    name: 'confirm',
    message: 'Would you like to enter a description for your ReadMe?',
    default: true
},
{
    type: 'input',
    name: 'about',
    message: 'Provide some information about your project:',
    when: ({ confirmAbout }) => confirmAbout
},
{
    type: 'input',
    name: 'installation',
    message: 'What does your Project need to install?'
},
{
    type: 'input',
    name: 'instructions',
    message: 'Give instructions on how to use you Project'
},
{
    type: 'input',
    name: 'license',
    message: 'What licenses do you have?'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Added who contributed to the Project'
},
{
    type: 'input',
    name: 'testInstructions',
    message: 'Give Instructions on how to use your Project'
},
{
    type: 'input',
    name: 'githubLink',
    message: 'Link your Github (Required)',
    validate: githubLinkInput => {
        if (githubLinkInput) {
            return true;
        } else {
            console.log('Please enter a github link! (Required)')
            return false;
        }
    }
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            rejects(err);
            return;
        }

        resolve({
            ok: true,
            message: 'ReadMe created!'
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("ReadMe.md", generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
