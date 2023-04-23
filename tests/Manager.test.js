
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');


test('this is the function getting the Role', () => {

    const Mike = new Manager('Anna', 432, `email`,'Github')
    expect(Mike. getRole()).toBe('Manager');

})