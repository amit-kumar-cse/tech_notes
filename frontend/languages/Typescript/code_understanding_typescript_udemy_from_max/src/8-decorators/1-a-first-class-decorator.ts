{
    function Logger(logString: string) {
        return function(constructor: Function) {
            console.log(logString);
            console.log(constructor);
        }
    }

    @Logger('Class - Person')
    class Person {
         name: string = 'Chaitanya';

         constructor() {
             console.log('Initializing Person class instance');
         }
    }

    let pers = new Person();
    console.log(pers);


}
