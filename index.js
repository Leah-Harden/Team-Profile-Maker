const inquirer = require('inquirer')


const startTheProgram = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your employee ?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
      {
        type: 'input',
        name: 'id',
        message: 'what is there id?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is there is email?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
      {
        type: 'list',
        name: 'role',
        message: 'What this there role? ',
        choices: ['Engieer', 'Intern', 'Manager'],
        validate: (value) => { if (value) { return true } else { return `Please pick a license for this project.` } },
      }
    ])
    .then(val => {

      if (val.choice) {
        roleSwitch();
      } else {
      console.log('fin');
      }
    });
}

const roleSwitch=() => {
  switch(startTheProgram.role) {
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

const engieerRole=() => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'gitHub',
        message: 'What is there there gitHub?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
      {
        type: 'input',
        name: 'again',
        message: 'You have finished an employee. Would you like to add aunthor?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      },
    ])
    .then(val => {
        switch(startTheProgram.role) {
          case Engieer:
            engieerRole()
          break;
        ;
      } else {
      console.log('fin');
      }
    });
}


const internRole=() => {

}

const managerRole=() => {

}