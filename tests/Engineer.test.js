
const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer');




test('this is me grab the Github', () => {
    const Github = `Mike123`
    const Mike = new Engineer('Anna', 432, `email`,Github)
    expect(Mike.getGithub()).toBe(Github);

});

test('this is the function getting the Role', () => {

    const Mike = new Engineer('Anna', 432, `email`,'Github')
    expect(Mike. getRole()).toBe('engineer');

})