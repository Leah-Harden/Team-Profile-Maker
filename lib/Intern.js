

const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(school) {
    super(    )
    this.school = school

  }
  getSchool(){
    console.log(`this is my school ${this.school}`)

  }
  getRole(){
    this.role = intern
    console.log(`this is my role ${this.role}`)
  }

}

module.exports = Intern
