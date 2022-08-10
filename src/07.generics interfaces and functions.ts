// ! falta terminar esta parte en adelante
// <T>: generic interface

const addId = <T>(obj:T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}
interface UserInterface7<T> {
    name: string;
    data: T;
}

const user5 = {
    name: "Jack"
}

// const result = addId<UserInterface7>("foo");
// console.log('result', result)

// https://www.youtube.com/watch?v=gp5H0Vw39yw&t=749s