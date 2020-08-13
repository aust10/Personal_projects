const inquirer = require('inquirer')
const minimist = require('minimist')

const files = require('./files')

module.exports = {
  askGitHubCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your GitHub username or e-mail address:',
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Please enter your GitHub username or e-mail address:'
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Please enter your password:'
          }
        }
      }
    ]
    return inquirer.prompt(questions)
  },

  askRepositoryDetails: () => {
    const argv = require('minimist')(process.argv.slice(2))
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a name for your repository:',
        default: argv._[0] || files.getCurrentDirectoryBase(),
        validate: function(value) {
          if (value.length) {
            return true
          } else {
            return 'Please enter a unique name for the repository'
          }
        }
      },
      {
        type: 'input',
        name: 'decription',
        default: argv._[1] || null,
        message: 'Now you can choose to enter a description of the repository if you like (this is not a manditory field):'
      },
      {
        type: 'input',
        name: 'visibility',
        message: 'Would you like to set this repository to public or private?:',
        choices: ['public', 'private'],
        default: 'public'
      }
    ]

    return inquirer.prompt(questions)
  },

  askIgnoreFiles: (filelist) => {
    const questions = [
      {
        type: 'checkbox',
        name: 'ignore',
        message: 'Select the file and/or folder you with to ignore',
        choices: filelist,
        default: ['node_modules']
      }
    ]
    return inquirer.prompt(questions)
  }
}
