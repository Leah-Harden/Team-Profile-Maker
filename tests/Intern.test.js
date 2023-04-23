

const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');


test('this is me grab the Github', () => {
    const school = `UCF`
    const Mike = new Intern('Anna', 432, `email`,school)
    expect(Mike.getSchool()).toBe(school);

});

test('this is the function getting the Role', () => {

    const Mike = new Intern('Anna', 432, `email`,'school')
    expect(Mike. getRole()).toBe('intern');

})