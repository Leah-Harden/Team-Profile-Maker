

const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name,id,email,officeNumber) {
    super(name,id,email )
    this.officeNumber = officeNumber
    this.role = 'Manager'

  }
  getRole(){
  return 'Manager'
  }

}


module.exports = Manager