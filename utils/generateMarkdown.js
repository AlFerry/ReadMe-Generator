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
    licenseSection = "";
  }
  else{
    licenseSection = `## License <a id ="license"></a> \nThis project is licensed under the ${license} license.`;
  }
  return licenseSection;
}

function renderTitle(title) {
  return `# ${title}`;
}

function renderDescription(description){
  return `## Description \n${description}`;
}

function renderMenu(data){
  var licenseHead;
  if(data.license != "none"){
    licenseHead = "* [License](#license)";
  }
  else{licenseHead = ""}
  return `## Table of Contents\n
  * [Installation](#installation)
  * [Usage](#usage)
  ${licenseHead}
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)`
}

function renderInstallation(installation){
  var instructions = `## Installation <a id="installation"></a>\n
  To install necessary dependencies, run the following command: \n`+
  `
  \`\`\`
  ${installation}
  \`\`\`
  `;
  return instructions;
}

function renderUsage(usage){
  return `## Usage <a id="usage"></a>\n
  ${usage}`;
}

function renderContribution(contribution){
  return `## Contributing <a id="contribution"></a>\n
  ${contribution}`;
}

function renderTests(test){
  var testing = `## Tests <a id="tests"></a>\n
  To run tests, run the following command: \n`+
  `
   \`\`\`
   ${test}
   \`\`\`
 `
  ;
  return testing;
}

function renderQuestions(email, username){
  return `## Questions? <a id="questions"></a>\n
  If you have any questions about the repo, open an issue or contact me directly at
   [${email}](${email}).\n
   You can view more of my work on my GitHub profile here: [${username}](https://github.com/${username}/).`;

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderTitle(data.title)}\n
  ${renderLicenseLink(data.license)}\n
  ${renderDescription(data.description)}\n
  ${renderMenu(data)}\n
  ${renderInstallation(data.installation)}\n
  ${renderUsage(data.usage)}\n
  ${renderLicenseSection(data.license)}\n
  ${renderContribution(data.contribution)}\n
  ${renderTests(data.test)}\n
  ${renderQuestions(data.email, data.username)}\n
`;
}

module.exports = generateMarkdown;
