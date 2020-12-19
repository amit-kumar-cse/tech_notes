{
    function Logger(logString: string) {
        return function(constructor: Function) {
            console.log(logString);
            console.log(constructor);
        }
    }

    function WithTemplate(template: string, hookId: string) {
        return function(constructor: any) {
            console.log('Function: WithTemplate');
            const hookElement = document.getElementById(hookId);
            const p = new constructor();
            if(hookElement) {
                hookElement.innerHTML = template;
                hookElement.textContent = p.name;
            }
        }
    }

    // @Logger('Class - Person')
    @WithTemplate('<h1>Hello user</h1>', 'app')
    class Person {
         name: string = 'Chaitanya';

         constructor() {
             console.log('Initializing Person class instance');
         }
    }

    let pers = new Person();
    console.log(pers);
}
