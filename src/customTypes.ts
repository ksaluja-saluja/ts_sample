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

/*** TYPES */
type PhoneNumber = {
    landline: string,
    mobile: string
}

//cannot declare duplicate type
// type PhoneNumber = {
//      fax: string
// }

const empPhoneNumber: PhoneNumber = {
    landline: '123456',
    mobile: '123456'
}

/*** Unions */
const employeeId: string | number = 1234

/**** CLASSES */
class Book {
    private name: string;
    constructor(name: string) {
        this.name = name
    }

    public greeting(): string {
        return `Book Name: ${this.name}`
    }
}

const bookObj = new Book('Harry Potter');
console.log(bookObj.greeting());