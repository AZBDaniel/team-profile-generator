const { expect, test } = require("@jest/globals");
const Manager = require("../lib/Manager");

test('create manager object', () => {
    const manager = new Manager();

    expect(typeof manager).toBe("object");
});

test('add office number', () => {
    const officeNumber = "Manager";
    const manager = new Manager("Ryan", 365, "ryanB@gmail.com", 123456789);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('add role', () => {
    const role = "Manager";
    const manager = new Manager("Ryan", 365, "ryanB@gmail.com", role);

    expect(manager.getRole()).toBe(role);
})

// // test getRole
// test("GitHub responsive", () => {
//     const testValue = "Manager";
//     const manager = new Manager("blue", 4, "cory@gmail.com", testValue);
//     expect(manager.getRole()).toBe(testValue);
// });