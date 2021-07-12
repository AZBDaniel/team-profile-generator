const Employee = require('./Employee');

// Constructor For Engineer Info

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //get GitHub username
    getGithub() {
        return this.github;
    }

    //get role info
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;