const Intern = require("../lib/Intern");

test('create intern object', () => {
    const intern = new Intern();

    expect(typeof intern).toBe("object");
});

test('add school', () => {
    const school = "University of Arizona";
    const intern = new Intern("Ryan", 365, "ryanB@gmail.com", school);

    expect(intern.getSchool()).toBe(school);
});

test('add role', () => {
    const role = "Intern";
    const intern = new Intern("Ryan", 365, "ryanB@gmail.com", role);

    expect(intern.getRole()).toBe(role);
});