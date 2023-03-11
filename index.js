const inquirer = require('inquirer')



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
  {
    type: 'comfirm',
    name: 'again',
    message: 'You have finished your manager. Would you like to add employee?',
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
    .then(val => {
      generateEngineer(basicQuestions, role)
      switch (val) {
        case true:
          inquirer
          .prompt(basicQuestions)
          break;
        case false:
          console.log('done')
      }
    });
}


const internRole = (basicQuestions) => {

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'school',
        message: 'What is their school?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
      {
        type: 'comfirm',
        name: 'again',
        message: 'You have finished an employee. Would you like to add another?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
    ])
    generateIntern(basicQuestions, role)
    .then(val => {
      switch (val) {
        case true:
          inquirer
          .prompt(basicQuestions)
          break;
        case false:
          console.log('done')
      }
    });
}

  //Extra Roles  -----------------------------------------

//templates   -----------------------------------------
function generateManager(firstQuestions) {
const templateManager = ` 
<div class="card myCard" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Manager</h5>
<hr>
<h6 class="card-subtitle mb-2 ">${firstQuestions.name}</h6>
<p class="card-text"> ID: ${firstQuestions.id}</p>
<a class="card-link">${firstQuestions.email}</a>
<p>${firstQuestions.officeNumber}</p>
</div>
</div>
`
}
function generateEngineer(basicQuestions) {
  const templateEngineer = ` 
  <div class="card myCard" style="width: 18rem;">
  <div class="card-body">
  <h5 class="card-title">Engineer</h5>
  <hr>
  <h6 class="card-subtitle mb-2 ">${basicQuestions.name}</h6>
  <p class="card-text"> ID:${basicQuestions.id}</p>
  <a class="card-link">${basicQuestions.email}</a>
  <a class="card-lin
  k" href="#">${role.github}</a>
  </div>
  </div>
  `
  return templateEngineer
}

function generateIntern(basicQuestions) {
const templateIntern = `  
<div class="card myCard" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Intern</h5>
<hr>
<h6 class="card-subtitle mb-2 ">Name</h6>
<p class="card-text"> ID: id</p>
<a class="card-link">email@lotmail.com</a>
<p>School</p>
</div>
</div>

`
return templateIntern
}
  //templates-----------------------------------------




//program running  -----------------------------------------

const roleSwitch = (basicQuestions.role) => {
  switch (firstQuestions.role) {
    case Engineer:
      engineerRole()
      break;
    case Intern:
      internRole()
      break;
  }
}
const startTheProgram = () => {
  inquirer
    .prompt(firstQuestions)
    .then({
      generateManager(firstQuestions)
      if (firstQuestions.done = true) {
        inquirer
        .prompt(basicQuestions)
        roleSwitch(basicQuestions.role)

      }
    });
    .prompt(basicQuestions)
}

//return templateManager