// TYPES - objects, enums, interfaces, types, unions, classes, functions
/*** OBJECT */
// inline object
const emp: {id: number, name: string, designation?: string} = {id: 1, name: 'first'}
console.log('EMPLOYEE', emp);

/*** ENUMS */
// not a good practice to use Enums as it gets converted into functions.
enum designation {
    MANAGER = 'MANAGER',
    DEVELOPER = 'DEVELOPER',
    TESTER = 'TESTER'
}

emp.designation = designation.DEVELOPER
console.log('EMPLOYEE', emp);

/*** INTERFACES */
// interfaces are typical blueprint for class structure
// in typescript, it's bit annoying that same interface can be declared multiple times
// and such interface when extended by object, then object has to provide props / function definations for all members
// types are much cleaner alternative of interfaces
interface Address {
    address1: string,
    state: string,
    postCode: string
}

interface Address {
    country: string
}

const empAddress: Address = {
    address1: 'flat 1',
    state: 'VIC',
    postCode: '3000',
    country: 'AU'
}

