// * no se recomienda usar void ni any
// = void is a set of undefine and null:
const doSomething = (): void => {
    console.log("Do something")
    return 
}

let foo: any = "foo"

let vAny: any = 10
let vUknown: unknown = 10;

let s1: string = vAny; // acá sí funciona
// let s2: string = vUknown; // error

// * type assertion or as datatype:
let s2: string = vUknown as string; // acá sí funciona porque se usa el as y cambia el uknown por string

// = para pasar de string a number debe primero pasarse a uknown:
let pageNumber: string = "1"
let numericPageNumber: number = (pageNumber as unknown) as number;

