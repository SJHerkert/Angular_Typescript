"use strict";
class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getBirthDate() {
        return this.birthDate;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
}
let person1 = new Person("George", "Martin", new Date("2019-08-03"));
console.log(person1.getFirstName());
person1.setFirstName("Brandon");
console.log(person1.getFirstName());
class Employee extends Person {
    constructor(firstName, lastName, birthDate, department) {
        super(firstName, lastName, birthDate);
        this.department = "";
        if (department)
            this.department = department;
    }
    setDepartment(department) {
        this.department = department;
    }
    getDepartment() {
        return this.department;
    }
    sayFullName() {
        return `${this.getFirstName()} ${this.getLastName()}`;
    }
}
let emp1 = new Employee("Mary Jane", "Watson", new Date("1965-06-01"));
