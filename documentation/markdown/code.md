```ts
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(hour: number, minute: number) {}
}

interface Animal {
    sizeInInch: number;
    // new (sizeInInch: number);
    makeSound: (volume: number) => void;
    makeSoundAtTopVolume: () => void;
}

class Dog implements Animal {
    sizeInInch: number;
    constructor(size: number) {
        this.sizeInInch = size;
    }
    makeSound = (volume: number) => {
        console.log(`Bhow bhow in volume: ${volume}`);
    }
    makeSoundAtTopVolume = () => {
        console.log('Bhow Bhow in top volume');
    }
}

class Cat implements Animal {
    sizeInInch: number;
    constructor(sizeInInch: number) {
        this.sizeInInch = sizeInInch;
    }
    makeSound = (volume: number) => {
        console.log(`Muaw Muaw in volume: ${volume}`);
    }
    makeSoundAtTopVolume = () => {
        console.log('Muaw Muaw in top volume');
    }
}

let tommy: Animal = new Dog(10);
tommy.makeSound(14);
tommy.makeSoundAtTopVolume();

let pussy: Animal = new Cat(10);
pussy.makeSound(12);
pussy.makeSoundAtTopVolume();

```
