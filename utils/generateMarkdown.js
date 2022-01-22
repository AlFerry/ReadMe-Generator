// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge;
  if(license === 'MIT'){
    licenseBadge = 'https://img.shields.io/badge/license-MIT-blue';
  }
  else if(license === 'APACHE 2.0'){
    licenseBadge = 'https://img.shields.io/badge/license-Apache-blue';
  }
  else if(license === 'GPL 3.0'){
    licenseBadge = 'https://img.shields.io/badge/license-GPL-blue';
  }
  else if(license === 'BSD 3'){
    licenseBadge = 'https://img.shields.io/badge/license-BSD-blue';
  }
  else{
    return licenseBadge;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink;
  var licenseBadge = renderLicenseBadge(license);
  if(!licenseBadge || license==='None'){
    licenseLink = "";
  }
  else{
    licenseLink = `![GitHub license](${licenseBadge})`;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection;
  if(license === 'None'){
    licenseSection = '';
  }
  else{
    licenseSection = `This project is licensed under the ${license} license.`;
  }
  return licenseSection;
}

function renderTitle(title) {
  return `# ${data.title}`;
}

function renderDescription(){
  return `## Description \n${data.description}`;
}

function renderMenu(data){

}

function renderInstallation(installation){
  var instructions = `## Installation \n
  To install necessary dependencies, run the following command: \n
  ```
  `${data.installation}`
  ```
  `;
  return instructions;
}

function renderUsage(usage){
  return `## Usage \n${data.usage}`;
}

function renderContribution(contribution){
  return `## Contributing \n${data.contribution}`;
}

function renderTests(test){
  var testing = `## Tests \n
  To run tests, run the following command: \n
  ```
  `${data.test}`
  ```
  `;
  return testing;
}

function renderQuestions(email, username){
  return `## Questions? \n
  If you have any questions about the repo, open an issue or contact me directly at
   [${data.email}](${data.email}).\n
   You can view more of my work on my GitHub profile here: [${data.username}](https://github.com/${data.username}/).`;

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderTitle(data.title)}
  ${renderLicenseLink(data.license)}
  ${renderDescription(data.description)}
  ${renderMenu(data)}
  ${renderInstallation(data.installation)}
  ${renderUsage(data.usage)}
  ${renderLicenseSection(data.license)}
  ${renderContribution(data.contribution)}
  ${renderTests(data.test)}  
  ${renderQuestions(data.email, data.username)}
`;
}

module.exports = generateMarkdown;
