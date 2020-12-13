interface Named {
    name: string;
    nickname?: number;
}

interface Greetable extends Named{
    greet(message: string): void;
}

class MyPerson implements Greetable {
    constructor(public name: string) {}

    greet(message: string) {
        console.log(`${message} ${this.name}`)
    }
}
