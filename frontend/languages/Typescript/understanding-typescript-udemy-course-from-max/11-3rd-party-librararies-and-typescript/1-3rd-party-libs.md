# 3rd party libraries.

1. Normal libraries
2. Typescript libraries.

---------
### Lodash example. Very important

for using vanilla javascript libraries in typescript and still get great typescript support.
You get great autocomplete and errors are shown during development.

https://www.udemy.com/course/understanding-typescript/learn/lecture/16936030#search

Problem
```typescript
import _ from 'lodash';

console.log(_.shuffle([1, 2, 3]));
```
Here, you want to use a 3rd party library, and it is built only for js

npm - --save-dev @types/lodash
It now installs this translation for Typescript to understand it. We do not need to import these with ES6 import statement in our project.

These packages are always named @types/...


https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types

These contain declarations as .d.ts files
