// Constructor For Employee Info

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }

    //Gets Employee Name
    getName() {
        return this.name;
    }

    //Gets Employee ID
    getId() {
        return this.id;
    }

    //gets employee Email
    getEmail() {
        return this.email;
    }

    //gets employee Roll
    getRole() {
        return this.role;
    }
}


module.exports = Employee;