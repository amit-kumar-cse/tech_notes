# Loops - while and for

For in vs For of

| Name   | Applied for | What it iterates over     |
| ------ | ----------- | ------------------------- |
| For in | Objects     | gets keys of objects      |
| For of | Arrays      | gets values of array items| 

* For in https://codepen.io/amikudev/pen/wvzjeaw
```javascript
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  console.log( fruit );
}

//this way not recommeded
for (let index in fruits) { 
  console.log( index );
}
```
* For of https://codepen.io/amikudev/pen/ZEpoyKy
```javascript
let person = {
  firstName: "Hari",
  lastName: "Prasad"
}

for (let key in person) {
  console.log(key);
}

//does not works.
for (value of person) {
  console.log(value);
}
```


