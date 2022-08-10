let lastname: string = "Baila";

interface UserInterface {
    name: string;
    age?: number; // con ? el atributo no es obligatorio
    getMessage(): string;
}

const user: UserInterface = {
    name: "Monster",
    age: 30,
    getMessage() {
        return "Hello " + lastname;
    },
};

const user2: UserInterface = {
    name: "Jack",
    getMessage() {
        return "Hello " + lastname;
    },
};

console.log(user.getMessage());