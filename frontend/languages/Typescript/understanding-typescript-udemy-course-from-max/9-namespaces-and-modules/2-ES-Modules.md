# ES Modules

Are support in ES6 and hence modern browsers support them.

I feel i know this already, i will go thorugh the documentation of www.javascript.info

----
Using ES6 modules, we can import all relevent files in our project if we just import one file. but we will have to import our file like this
```html
<script type="module" src="./app.js"></script>
```

----------
## Various import syntax

1. General best option
```javascript
import {Validator} from '1-namespaces.js';

// or
import {Validator as MyValidator} from '1-namespaces.js';
```

2. default imports
```javascript
import Validator from '1-namespaces.js';
```

3. Grouping
```javascript
import * as Validation from '1-namespaces.js';

cont isValid = Validation.validate(value);
```

## Various export syntax
1. default export
```typescript
export default interface Person {
    name: string;
}

//from other file
import Pers from './..';
```

### notes provided by max
* https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
