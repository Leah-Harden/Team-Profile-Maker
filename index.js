// TODO: Import the parent class


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
        this.play();
      } else {
        this.quit();
      }
    });
}
