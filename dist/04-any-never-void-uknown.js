// * no se recomienda usar void ni any
// = void is a set of undefine and null:
var doSomething = function () {
    console.log("Do something");
    return;
};
var foo = "foo";
var vAny = 10;
var vUknown = 10;
var s1 = vAny; // acá sí funciona
// let s2: string = vUknown; // error
// * type assertion or as datatype:
var s2 = vUknown; // acá sí funciona porque se usa el as y cambia el uknown por string
// = para pasar de string a number debe primero pasarse a uknown:
var pageNumber = "1";
var numericPageNumber = pageNumber;
