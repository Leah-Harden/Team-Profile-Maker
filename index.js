const inquirer = require('inquirer')
const employee = require('./lib/Employee')
const manager = require('./lib/Manager')
const intern = require('./lib/Intern')
const engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
// requites  -----------------------------------------

let teamPlayers = [

]

// questions  -----------------------------------------

const firstQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your Manager?',
    validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
  },
  {
    type: 'input',
    name: 'id',
    message: 'what is their id?',
    validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is their is email?',
    validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is their office number?',
    validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
  },
]




const firstAsk = [
{
  type: 'comfirm',
  name: 'done',
  message: 'You have finished your manager. Would you like to add employee?',
  validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
},
]

const basicQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your employee?',
    validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
  },
  {
    type: 'input',
    name: 'id',
    message: 'what is their id?',
    validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is their is email?',
    validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
  },
  {
    type: 'list',
    name: 'role',
    message: 'What this their role? ',
    choices: ['Engineer', 'Intern', 'Manager'],
    validate: (value) => { if (value) { return true } else { return `Please pick a role for this employee.` } },
  },
  //fix
  
]
const basicAsk = [
{
  type: 'comfirm',
  name: 'again',
  message: 'You have finished your employee. Would you like to add another employee?',
  validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
},
]
// questions  -----------------------------------------
//Extra Roles  -----------------------------------------

const engineerRole = (basicQuestions) => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'gitHub',
        message: 'What is their gitHub?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
      {
        type: 'comfirm',
        name: 'again',
        message: 'You have finished an employee. Would you like to add aunthor?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
    ])
    .then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamMembers.push(engineer);

      switch (answers.again = true) {
        case true:
          inquirer
            .prompt(basicQuestions)
          break;
        case false:
          teamGenerater()
          console.log('done')
      }
    });
}


// const internRole = (basicQuestions) => {

//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'school',
//         message: 'What is their school?',
//         validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
//       },
//       {
//         type: 'comfirm',
//         name: 'again',
//         message: 'You have finished an employee. Would you like to add another?',
//         validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
//       },
//     ])
//     generateIntern(basicQuestions)
//     .then(val => {
//       switch (val) {
//         case true:
//           inquirer
//           .prompt(basicQuestions)
//           break;
//         case false:
//           console.log('done')
//       }
//     });
//   }




//Extra Roles  -----------------------------------------
//Objects -----------------------------------------
//Objects -----------------------------------------

//program running  -----------------------------------------

function teamGenerater() {

  teamPlayers.forEach(teamPlayer => {
    if (teamPlayer.role = 'manager') {

      function generateManager(teamPlayer) {
        const templateManager = ` 
        <div class="card myCard" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <hr>
    <h6 class="card-subtitle mb-2 ">${teamPlayer.name}</h6>
    <p class="card-text"> ID: ${teamPlayer.id}</p>
    <a class="card-link">${teamPlayer.email}</a>
    <p>${teamPlayer.officeNumber}</p>
    </div>
    </div>
    `
      }


    } else if (teamPlayer.role = "engineer") {

      function generateEngineer(basicQuestions) {


        const templateEngineer = ` 
    <div class="card myCard" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <hr>
    <h6 class="card-subtitle mb-2 ">${teamPlayer.name}</h6>
    <p class="card-text"> ID: ${teamPlayer.id}</p>
    <a class="card-link">${teamPlayer.email}</a>
    <a class="card-link" href="#">${teamPlayer.github}</a>
    </div>
    </div>
      `
        return templateEngineer
      }


    } else if (teamPlayer.role = "intern") {

    }
    function generateIntern(teamPlayer) {
      const templateIntern = `  
    <div class="card myCard" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Intern</h5>
    <hr>
    <h6 class="card-subtitle mb-2 ">${teamPlayer.name}</h6>
    <p class="card-text"> ID: ${teamPlayer.id}</p>
    <a class="card-link">${teamPlayer.email}</a>
    <p>School${teamPlayer.school}</p>
    </div>
    </div>
    
    `
      return templateIntern
    }
  });

}


//program running  -----------------------------------------

// const roleSwitch = (basicQuestions.role) => {
//   switch (firstQuestions.role) {
//     case Engineer:
//       engineerRole()
//       break;
//     case Intern:
//       internRole()
//       break;
//   }
// }

const startTheProgram = () => {
  inquirer
    .prompt(firstQuestions)
    .then((firstQuestions) => {
      const manager = new Manager(firstQuestions.name, firstQuestions.id, firstQuestions.email, firstQuestions.officeNumber);
      teamMembers.push(manager)
    })
    if(firstQuestions.done = false) {
      teamGenerater() 
    } else if(firstQuestions.done = true) {
      inquirer
      .prompt(basicQuestions)
    }
}
startTheProgram()

