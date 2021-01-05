# Arrays

### Define new arrays
```typescript
//preferred syntex
let arr1 = [];
let arr2 = ["A", 1];
let arr3: Array<number> = [1, 2];

let arr7 = new Array(2);  //
let arr8 = new Array("Apple", "Pear");

```

Array by itself can work as a stack or a queue, with help of these methods
* Push
* Pop
* Shift - pop from beginning
* Unshift - Adds an element at the beginning of an array.
    * Shift and unshift are slow.

---
Array is a special kind of object
* hence it copy by reference only.

```javascript
let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true
```

### Loops

[Js loops](../javascript-fundamentals/Loops%20-%20while%20and%20for.md)

### length
length is greatest numberic index in array + 1

### multidimensional arrays

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] );
```

### array comparison

* Should always be done using a custom method or lodash. never with == or ===
* https://javascript.info/array#don-t-compare-arrays-with
  * Learn reasoning from here later

