{
    function merge<T extends object, U extends object >(objA: T, objB: U) {
        return  Object.assign(objA, objB);
    }

    //run 1
    const result = merge({name: 'Amit'}, {age: 33});

    //run 2
    const result1 = merge({name: 'Amit', hobbies: ['hearing', 'chanting']}, {age: 33});

    //run 3: declaring in advance what should be the types T and U for this function call, but such type declaration is
    // ... not required and is redundant.
    const result2 = merge<{name: string; hobbies: string[]}, {age: number;}>({name: 'Amit', hobbies: ['hearing', 'chanting']}, {age: 33});

    console.log(result.name);
    console.log(result1);
    console.log(result2);
}

//A good generic function example with constraint example.
{
    interface Lengthy {
        length: number;
    }

    function countAndDescribe<T extends Lengthy> (element: T): [T, string] {
        let descriptionText = 'Got no value';
        if(element.length === 1) {
            descriptionText = 'Got 1 value';
        } else if (element.length > 1) {
            descriptionText = 'got ' + element.length + ' values';
        }

        return [element, descriptionText];
    }

    console.log(countAndDescribe(['Hare', 'Krsna']));
    console.log(countAndDescribe('govind'));
    console.log(countAndDescribe('g'));
    console.log(countAndDescribe(''));
}

//the keyof contraint
{
    function extractAndConvert<T extends object, U extends keyof T>(
        obj: T,
        key: U
    ) {
        return obj[key];
    }

    // const result = extractAndConvert({}, 'name');
    const result1 = extractAndConvert({name: 'Krsna'}, 'name');
    // const result2 = extractAndConvert({name: 'Krsna'}, 'age');
}
