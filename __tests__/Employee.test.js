const Employee = require("../lib/Employee");

test('creates employee object', () => {
    const employee = new Employee();

    expect(typeof employee).toBe("object");
});

test('add name', () => {
    const name = "Ryan";
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
});

test('add id', () => {
    const id = 365;    
    const employee = new Employee("_", id);

    expect(employee.getId()).toEqual(id);
});

test('add email', () => {
    const email = "ryanB@gmail.com";    
    const employee = new Employee("_", 5, email);

    expect(employee.getEmail()).toEqual(email);
});