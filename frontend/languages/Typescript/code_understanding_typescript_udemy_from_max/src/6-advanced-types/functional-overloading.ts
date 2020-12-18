type Combinable = number | string;

function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: string, y: number): string;
function add(x: number, y: string): string;
function add(x: Combinable, y: Combinable): Combinable {
    if(typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    return x.toString() + y.toString();
}

const result1 = add ('Hare', 'Krsna');
console.log(result1);

const result2 = add (1, 'Krsna');
console.log(result2);

const result3 = add ('Hare', 108);
console.log(result3);

const result4 = add (100, 8);
console.log(result4);
