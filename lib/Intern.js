

const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name,id,email,school) {
    super(name,id,email)
    this.school = school

  }
  getSchool(){
    console.log(`this is my school ${this.school}`)

  }
  getRole(){
    return intern
  
  }

}

module.exports = Intern
