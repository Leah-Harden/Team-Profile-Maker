
class Employee {
  constructor(name,id,email) {
    this.name = name
    this.id = id
    this.email = email
    this.role = undefined
  }
  getName() {
    return(`this is my name, ${this.name}`)
  }
  getId() {
    return(`this is my id, ${this.id}`)
  }
  getEmail(){
    return(`this is my email, ${this.email}`)
    
  }
  getRole() {
    console.log(`i do not have a role`)
  }

}

module.exports = Employee


