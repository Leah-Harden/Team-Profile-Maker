const inquirer = require('inquirer')

const basicQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your employee ?',
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
    choices: ['Engieer', 'Intern', 'Manager'],
    validate: (value) => { if (value) { return true } else { return `Please pick a role for this employee.` } },
  }
]


const startTheProgram = () => {
  inquirer
    .prompt(basicQuestions)
    .then(val => {
      if (val = true) {
        roleSwitch(basicQuestions);
      } else {
        console.log('something broke');
      }
    });
}

const roleSwitch = (basicQuestions) => {
  switch (basicQuestions.role) {
    case Engieer:
      engieerRole()
      break;
    case Intern:
      internRole()
      break;
    case Manager:
      managerRole()
      break;
  }
}

const engieerRole = () => {
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

      switch (val) {
        case true:
          startTheProgram()
          break;
        case false:
          console.log('done')
      }
    });
}


const internRole = () => {

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
    .then(val => {
      switch (val) {
        case true:
          startTheProgram()
          break;
        case false:
          console.log('done')
      }
    });
}

const managerRole = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
      {
        type: 'comfirm',
        name: 'again',
        message: 'You have finished an employee. Would you like to add another?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
    ])
    .then(val => {
      switch (val) {
        case true:
          startTheProgram()
          break;
        case false:
          console.log('done')
      }
    });
}

function generate(questions) {


}

const templateEngineer = ` 
<div class="card myCard" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <hr>
    <h6 class="card-subtitle mb-2 ">Name</h6>
    <p class="card-text"> ID: id</p>
    <a class="card-link">email@lotmail.com</a>
    <a class="card-link" href="#">GitHub</a>
</div>
</div>
`
//return templateEngineer

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
//return templateIntern

const templateManager = ` 
<div class="card myCard" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Manager</h5>
                    <hr>
                    <h6 class="card-subtitle mb-2 ">Name</h6>
                    <p class="card-text"> ID: id</p>
                    <a class="card-link">email@lotmail.com</a>
                    <p>officeNumber</p>
                </div>
            </div>




`
//return templateManager