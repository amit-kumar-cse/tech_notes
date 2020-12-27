# Decorators

I have not prepared full notes of this chapter as i felt it may be a little
bit of overkill.
Please revise this from typescript documentation itself.
https://www.typescriptlang.org/docs/handbook/decorators.html

All decorators are functions, that fire on particular times.

Generally decorators are used by other code to enhances functionality of those classes etc. e.g. angular uses lots of decorators.

In tsconfig.json it is a must to make target at least ES6 and
enable experimentalDecorators to true, Failing which, our decorators will not work.

It is best to start decorator names with capital letters, though it is not compulsory, but it is a good market practice.

Declarators execute when your class is defined, not when it is instantiated.

[code](../../code_understanding_typescript_udemy_from_max/src/8-decorators/1-a-first-class-decorator.ts)

---

### Decorator Factories

**Decorator factories** are used to get Decorators which are configured
with the parameters passed to the logger decorator. as shown in the example in this checkin.

---

### Building more useful decorators.

Here, we see that we are able to modify the DOM at any place by just calling a decorator at one place.
So decorators give us lot of flexibility.

If we need to declare some parameter in our function, but we do not need to use it.
We can define it with parameter name \_, as shown in the example in this checkin.

```typescript
const isValid = true;
isValid = isValid && false;
isValid = isValid && ...someBooleanCondition;

```

### Some good packages

- https://github.com/typestack/class-validator
- https://www.npmjs.com/package/typescript-starter
- https://www.npmjs.com/search?q=typescript&ranking=popularity
