const fs = require('fs')
const inquirer = require('inquirer')

const userInput = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'location',
        message: 'What is your location?'
      },
      {
        type: 'input',
        name: 'bio',
        message: 'What is your biography?'
      },
      {
        type: 'input',
        name: 'LinkedInURL',
        message: 'What is your LinkedIn URL?'
      },
      {
        type: 'input',
        name: 'GithubURL',
        message: 'What is your Github URL?'
      }
    ])
    .then(res => {
      console.log(res)
      const name = res.name
      const location = res.location
      const bio = res.bio
      const linkedIn = res.LinkedInURL
      const github = res.githubURL
      fs.appendFile('newReadMe.md', `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HTML Profolio</title>
      <script src='./reset.css'></script>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

      </head>
      <body>
      --------
      <div class="jumbotron">
      <h1> Your name is ${name}</h1>
      <h1> Your location is ${location}</h1>
      <h1> Your bio is ${bio} </h1>
      <a href="${linkedIn}">LinkedIn</a>
      <a href="${github}">Github</a>s
      </div>
      </body>
      </html>
      `, (err) => {
        if (err) { console.log(err) }
        console.log('HTML Portfolio Created!')
      })
    })
    .catch(err => console.log(err))
}

userInput()
