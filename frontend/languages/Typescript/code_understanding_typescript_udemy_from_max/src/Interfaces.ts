interface Greetable {
  name: string;
  greet(message: string): void;
}

interface Serializable {
  serialize(): string;
}

class Person implements Greetable, Serializable {
  constructor(public name: string) {}

  greet(message: string) {
    console.log(`${message} ${this.name}`);
  }

  serialize(): string {
    return `My name is ${this.name}`;
  }
}

const amit: Greetable = new Person("Amit");
amit.greet("Hello");
