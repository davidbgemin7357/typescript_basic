// ! falta terminar esta parte en adelante
// <T>: generic interface
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user5 = {
    name: "Jack"
};
var result = addId("foo");
console.log('result', result);
// https://www.youtube.com/watch?v=gp5H0Vw39yw&t=749s
