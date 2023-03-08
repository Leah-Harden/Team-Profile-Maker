
const Employee = require('../lib/Employee.js');


describe('functions', () => {
  const Mike = new Employee(`Mike`,432,`Mike@gmail.com`)
  it('this is me grab the name', () => {
    expect(Mike).toBe(false);
  });

})