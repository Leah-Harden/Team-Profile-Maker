
const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name,id,email,github) {
    super(name,id,email)
    this.github = github
    this.role = 'engineer'

  }
  getGithub(){

  }
  getRole(){
    return 'engineer'
    }

}


module.exports = Engineer