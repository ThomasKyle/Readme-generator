// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license == "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license == "IBM") {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
  } else if (license == "BSD-3 Clause license") {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else if (license == "None") {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license == "IBM") {
    return `https://opensource.org/licenses/IPL-1.0`;
  } else if (license == "BSD-3 Clause license") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  } else if (license == "None") {
    return ``;
  }
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## About
${generateAbout}
## Installation
${data.installation}
## Intructions
${data.instructions}
## License
[${data.license}](${renderLicenseSection(data.license)})
## Contribution
${data.contribution}
## Test Instructions
${data.testInstructions}
## Github Link
${data.githubLink}
`;
}

module.exports = generateMarkdown;
