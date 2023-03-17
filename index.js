const inquirer = require('inquirer')
const fs = require('fs');
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');

// requites  -----------------------------------------

let teamPlayers = [

]

let finalFile = [`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link href="/dis/style.css" rel="stylesheet">
    <title>Team-Profile-Maker</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
        <div class="box">`,


]
// ness  -----------------------------------------
const ending = `
</header>
</body>
<script src="./index.html"></script>

</html>
`



// ness  -----------------------------------------

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
    message: 'You have finished your manager. Would you like to add employee? type "yes" if so.',
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
    choices: ['Engineer', 'Intern'],
    validate: (value) => { if (value) { return true } else { return `Please pick a role for this employee.` } },
  },
  //fix

]
const basicAsk = [
  {
    type: 'comfirm',
    name: 'again',
    message: 'You have finished your employee. Would you like to add another employee? type "yes" if so.',
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
        name: 'github',
        message: 'What is their gitHub?',
        validate: (value) => { if (value) { return true } else { return `Please fill in the blank.` } },
      }
    ])
    .then(answers => {
      const engineer = new Engineer(basicQuestions.name, basicQuestions.id, basicQuestions.email, answers.github);
      teamPlayers.push(engineer);
      inquirer
      .prompt(basicAsk)
      //                  })
      .then((answer) => {
        if (answer.again === "yes") {
          addEmployee()
        } else {
        

            generateFile()
        }
      })
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
      }
    ])
    .then(answers => {
      const intern = new Intern(basicQuestions.name, basicQuestions.id, basicQuestions.email, answers.school);
      teamPlayers.push(intern);
      inquirer
      .prompt(basicAsk)
      //                  })
      .then((answer) => {
        if (answer.again === "yes") {
          addEmployee()
        } else {

          generateFile()
        }
      })
    });
}



//Extra Roles  -----------------------------------------

//program running  -----------------------------------------

function teamGenerater() {
  console.log(teamPlayers)
  teamPlayers.forEach(teamPlayer => {
    switch (teamPlayer.getRole()) {
      case 'Manager':

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
        finalFile.push(templateManager)
        break;
      case 'engineer':
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
        finalFile.push(templateEngineer)

        break;
      case 'intern':
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
        finalFile.push(templateIntern)
    };




  })
}


//program running  -----------------------------------------

const roleSwitch = (basicQuestions) => {
  if (basicQuestions.role === 'Engineer') {

    engineerRole(basicQuestions)

  } else if (basicQuestions.role === 'Intern') {
    internRole(basicQuestions)
  }
}


function generateFile() {
  teamGenerater()
  finalFile.push(ending)
  let joinText = finalFile.join()
  fs.writeFile('Team.html', joinText, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });

}
function managerPrompt() {
  inquirer.prompt(firstQuestions)
    .then((firstQuestions) => {
      const manager = new Manager(firstQuestions.name, firstQuestions.id, firstQuestions.email, firstQuestions.officeNumber);
      teamPlayers.push(manager)
      startTheProgram();
    })

}

function addEmployee() {
  inquirer
    .prompt(basicQuestions)
    .then((basicQuestions) => {
      roleSwitch(basicQuestions)
      //need a wait
      //               .then(() => {
    })
}




const startTheProgram = () => {
  //Ask
  inquirer
    .prompt(firstAsk)
    .then((answer) => {
      if (answer.done === "yes") {
        addEmployee()
      } else {
        generateFile()
      }
    })
}
managerPrompt()