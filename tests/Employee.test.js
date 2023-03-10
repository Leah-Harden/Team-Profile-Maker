
const Employee = require('../lib/Employee.js');


test('this is me grab the name', () => {
  const name = `Mike`
  const Mike = new Employee(name,432,`email`)
  expect(Mike.name).toBe(name); 
  
});

test('this is the function getName', () => {
  const name = `Mike`
  const Mike = new Employee(name,432,`email`)
  expect(Mike.getName()).toBe(`this is my name, `+ name);
  

})
it('this is me grab the id ', () => {
  const id = 432
  const Mike = new Employee(`Mike`,id,`email`)
  expect(Mike.id).toBe(id);
});

test('this is the function getId()', () => {
  const id = 432
  const Mike = new Employee('Mike', 432,`email`)
  expect(Mike.getId()).toBe(`this is my id, `+ id);
})

it('this is me grab the email', () => {
  const email = `Mike@gmail.com`
  const Mike = new Employee(`Mike`,432,email)
    expect(Mike.email).toBe(email);
  });
  
  it('this is THE getEmail()', () => {
    const email = `Mike@gmail.com`
    const Mike = new Employee(`Mike`,432,email)
      expect(Mike.getEmail()).toBe(`this is my email, `+email);
    });


  it('this is me grab the role', () => {
    const Mike = new Employee(`Mike`,432,`email`)
    expect(Mike.role).toBe(undefined);
  });

  it('this is the getRole()', () => {
    const Mike = new Employee(`Mike`,432,`email`)
    expect(Mike.getRole()).toBe(undefined);
  });
