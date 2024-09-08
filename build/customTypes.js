"use strict";
// TYPES - objects, enums, interfaces, types, unions, classes, functions
/*** OBJECT */
// inline object
const emp = { id: 1, name: 'first' };
console.log('EMPLOYEE', emp);
/*** ENUMS */
var designation;
(function (designation) {
    designation["MANAGER"] = "MANAGER";
    designation["DEVELOPER"] = "DEVELOPER";
    designation["TESTER"] = "TESTER";
})(designation || (designation = {}));
emp.designation = designation.DEVELOPER;
console.log('EMPLOYEE', emp);
