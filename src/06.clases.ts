// = todo es público por defecto:
interface UserInterface3 {
    getFullName(): string;
}

class User implements UserInterface3 {
    private firstName: string;
    private lastName: string;
    readonly unchangableName: string;
    static maxAge = 50;

    constructor(firstName: string, lastName: string, neo: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = neo;
    }

    changeUnchangableName(): void {
        // this.unchangableName = 'foo'; // error porque solo es de lectrua
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

const user4 = new User("David", "Baila", "gg");

// console.log(user4.firstName); // error porque firstName es privado
console.log(user4.getFullName()); // David Baila

class Admin extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const admin = new Admin("gaa", "mee", "fua");
console.log(admin.getFullName()); // gee mee
