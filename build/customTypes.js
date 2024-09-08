"use strict";
// TYPES - objects, enums, interfaces, types, unions, classes, functions
/*** OBJECT */
// inline object
const emp = { id: 1, name: 'first' };
console.log('EMPLOYEE', emp);
/*** ENUMS */
// not a good practice to use Enums as it gets converted into functions.
var designation;
(function (designation) {
    designation["MANAGER"] = "MANAGER";
    designation["DEVELOPER"] = "DEVELOPER";
    designation["TESTER"] = "TESTER";
})(designation || (designation = {}));
emp.designation = designation.DEVELOPER;
console.log('EMPLOYEE', emp);
const empAddress = {
    address1: 'flat 1',
    state: 'VIC',
    postCode: '3000',
    country: 'AU'
};
//cannot declare duplicate type
// type PhoneNumber = {
//      fax: string
// }
const empPhoneNumber = {
    landline: '123456',
    mobile: '123456'
};
/*** Unions */
const employeeId = 1234;
/**** CLASSES */
class Book {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return `Book Name: ${this.name}`;
    }
}
const bookObj = new Book('Harry Potter');
console.log(bookObj.greeting());
