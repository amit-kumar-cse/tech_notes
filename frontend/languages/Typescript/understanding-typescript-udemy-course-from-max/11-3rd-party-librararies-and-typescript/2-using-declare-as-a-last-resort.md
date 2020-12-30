# Declare

```html
<script>
  var GLOBAL = "This is set";
</script>
```

```typescript
declare var GLOBAL: string;
console.log(GLOBAL);
```

---

Declare means to tell typescript, dont worry, it will exist.

Use it only as the last resort.

------------
You can even declare the presence of libraries with this technique.
See https://medium.com/@steveruiz/using-a-javascript-library-without-type-declarations-in-a-typescript-project-3643490015f3

Also, you can refer to your portfolio website for an example
