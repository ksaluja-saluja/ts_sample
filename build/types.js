"use strict";
// Simple Types: string, boolean, number
// Special Types: any, unknown, never
/**** ANY */
// any: can take any type of value
let val = 'hello';
console.log('OBJ - Value 1', val);
val = 123;
console.log('OBJ Value 2 ', val);
/**** UNKNOWN */
// uknown: can take any type of value like any, but need to check type before accessing functions / props etc.
let obj1 = 'hello';
// below will break as "length" prop can't be accessed from unknown type
// obj1.length
if (typeof obj1 === 'string') {
    console.log('LENGTH ', obj1.length);
}
/**** NEVER */
// when ssome function makes code unreachable, e.g. throwing error, infinite loop etc.
function func1() {
    throw new Error('error here');
}
function func2() {
    throw new Error('error here');
}
