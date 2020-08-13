const fs = require('fs')
const inquirer = require('inquirer')

const userInput = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Title Project: '
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description: '
      },
      {
        type: 'input',
        name: 'instruction',
        message: 'Installation instruction: '
      },
      {
        type: 'input',
        name: 'usageInformation',
        message: 'Usage information '
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Contribution Guidelines: '
      },
      {
        type: 'input',
        name: 'testInstruction',
        message: 'Test Instruction: '
      },
      {
        type: 'input',
        name: 'license',
        message: 'License: '
      },
      {
        type: 'input',
        name: 'github',
        message: 'Github Username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email Address:'
      }

    ])
    .then(res => {
      console.log(res)
      const title = res.title
      const description = res.description
      const instruction = res.instruction
      const usageInformation = res.usageInformation
      const contributionGuidelines = res.contributionGuidelines
      const testInstruction = res.testInstruction
      const license = res.license
      const github = res.github
      const email = res.email
      fs.appendFile('newReadMe.md', `
      ## License:
      ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      https://img.shields.io/badge/license-${license}-blue.svg
      # ${title}
      ## Table of Contents: 
      <a href='${description}'>Description</a>
      ## Description: 
      ${description}
      ## Installation: 
      ${instruction}
      ## Usage Information: 
      ${usageInformation}
      ## Contribution GuideLines: 
      ${contributionGuidelines}
      ## Test Intructions: 
      ${testInstruction}
      ## Question:
      ${github}
      ### Please contact me thorugh my email ${email} for more information
      `, (err) => {
        if (err) { console.log(err) }
        console.log('HTML Portfolio Created!')
      })
    })
    .catch(err => console.log(err))
}

userInput()
