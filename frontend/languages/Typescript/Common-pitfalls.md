# Common pitfalls

1. Missing to add @ in the front of a decorator. Example below.
```typescript
function WithTemplate(template: string, hookId: string) {
    return function(constructor: Function) {
        console.log('Function: WithTemplate');
        const hookElement = document.getElementById(hookId);
        if(hookElement) {
            hookElement.innerHTML = template;
        }
    }
}

WithTemplate('<h1>Hello user</h1>', 'app')
class Person {
     name: string = 'Chaitanya';

     constructor() {
         console.log('Initializing Person class instance');
     }
}
```

2. If you make some config changes, please make sure to restart the server.

3. 
