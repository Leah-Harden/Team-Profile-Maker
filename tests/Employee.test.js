
const Employee = require('../lib/Employee.js');


describe('Visibility', () => {
  it('Characters that are digits or letters should not be visible', () => {
    expect(new Letter('j').visible).toBe(false);
  });

})