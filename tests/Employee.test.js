
const Employee = require('../lib/Employee.js');


test('this is me grab the name', () => {
  const name = `Mike`
  const Mike = new Employee(name,432,`email`)
  expect(Mike.name).toBe(name);
  
});
it('this is me grab the id ', () => {
  const id = 432
  const Mike = new Employee(`Mike`,id,`email`)
  expect(Mike.id).toBe(id);
});
it('this is me grab the email', () => {
  const email = `Mike@gmail.com`
  const Mike = new Employee(`Mike`,432,email)
    expect(Mike.email).toBe(email);
  
  });
  it('this is me grab the role', () => {
    const Mike = new Employee(`Mike`,432,`email`)
    expect(Mike.role).toBe(undefined);
  });
