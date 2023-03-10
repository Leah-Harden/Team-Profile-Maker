

const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(officeNumber) {
    super(    )
    this.officeNumber = officeNumber

  }
  getRole(){
    this.role = manager
    console.log(`manager`)
  }

}


module.exports = Manager