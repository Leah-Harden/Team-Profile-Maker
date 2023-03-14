
const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(namee,id,email,github) {
    super(namee,id,email)
    this.github = github
    this.role = engineer

  }
  getGithub(){

  }

}


module.exports = Engineer