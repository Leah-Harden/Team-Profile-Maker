

const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name,id,email,school) {
    super(name,id,email)
    this.school = school
    this.role = 'intern'

  }
  getSchool(){
    return  this.school

  }
  getRole(){
    return 'intern'
  
  }

}

module.exports = Intern
