// TODO: Write code to define and export the Employee class
class Employee {

    //TODO: Comment this
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return this.constructor.name;
    }
}

module.exports = Employee;