{
    function Logger (constructor: Function) {
        console.log('Inside logger');
        console.log(constructor);
    }

    @Logger
    class Person {
         name: string = 'Chaitanya';

         constructor() {
             console.log('Initializing Person class instance');
         }
    }

    let pers = new Person();
    console.log(pers);


}
