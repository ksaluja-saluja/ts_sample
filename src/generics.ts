//Generics are used as placeholders for required data type
function getFirstValue<X>(arr: X[]): X {
    return arr[0]
}

//another example, generic type with default value
interface APIResponse<APIResult = { message: string }> {
    data: APIResult,
    statusCode: number
}

type EmpSuccessResponse = APIResponse<{
    firstName: string,
    lastName: string,
    age: number
}>

type BookSuccessResponse = APIResponse<{
    bookName: string,
    author: string,
}>

const empResponse: EmpSuccessResponse = {
    data: {
        firstName: 'first',
        lastName: 'last',
        age: 30
    },
    statusCode: 200
}

const bookResponse: BookSuccessResponse = {
    data: {
        bookName: 'first',
        author: 'last'
    },
    statusCode: 200
}

// extends from type will add a check in generic
// interface APIResponse<APIResult as object = { message: string }> {
//     data: APIResult,
//     statusCode: number
// }


const otherResponse: APIResponse<string> = {
    data: 'success',
    statusCode: 200
}

// in above example, we are providing string as generic
// we can extends to an object to restrict it always to be an object (even with default structure)

interface AnotherAPIResponse<APIResult extends object = { message: string }> {
    data: APIResult,
    statusCode: number
}

const result: AnotherAPIResponse<{ message: string, code: number}> = {
    data: {
        message: 'success',
        code: 200
    },
    statusCode: 200
}

// with default object structure.
const result1: AnotherAPIResponse = {
    data: {
        message: 'success',
    },
    statusCode: 200
}