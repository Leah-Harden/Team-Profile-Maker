

const Employee = require('./Employee.js');
const Manager = require('./Manager.js');

class Car extends Vehicle {
  constructor(id,color,carPassengers) {
    super(id, 4 , "beep")
    this.carPassengers = carPassengers
    this.color = color
  }
  checkPassengers() {
    console.log("this are the people" + this.carPassengers )
  }
  useHorn(){
    console.log(this.sound)
  }

}


