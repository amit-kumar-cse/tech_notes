# Strict Compilation

### Strict flag

"strict": true makes all the other flags true.

### strictNullChecks
To ensure that button is not null, use one of these 2 approaches.
```typescript
const button = document.querySelector('button')!;
```
or
```typescript
const button = document.querySelector('button');

if(button) {
    button.addEventListener("click", () => { 
        //... 
    });
}
```
