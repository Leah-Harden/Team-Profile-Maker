// TODO: Import the parent class

class Employee {
  constructor(name,id,email) {
    this.name = name
    this.id = id
    this.email = email
    this.role = undefined
  }
  getName() {
    console.log(`this is my name, ${this.name}`)
  }
  getId() {
    console.log(`this is my id, ${this.id}`)
  }
  getEmail(){
    console.log(`this is my email, ${this.email}`)
  }
  getRole() {
    console.log(`i do not have a role`)
  }

}

module.exports = Employee


