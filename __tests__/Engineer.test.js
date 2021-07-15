const Engineer = require("../lib/Engineer");

test('create engineer object', () => {
    const engineer = new Engineer();

    expect(typeof engineer).toBe("object");
});

test('add github', () => {
    const gitHub = "AZRBishop";
    const engineer = new Engineer("Ryan", 365, "ryanB@gmail.com", gitHub);

    expect(engineer.getGithub()).toBe(gitHub);
});

test('add role', () => {
    const role = "Engineer";
    const engineer = new Engineer("Ryan", 365, "ryanB@gmail.com", role);

    expect(engineer.getRole()).toBe(role);
});