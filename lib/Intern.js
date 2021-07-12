const Employee = require('./Employee');

// Constructor For Intern Info

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //get office Office number
    getSchool() {
        return this.school;
    }

    //get role info
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;