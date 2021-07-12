const Employee = require('./Employee');

// Constructor For Manager Info

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //get office Office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    //get role info
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;