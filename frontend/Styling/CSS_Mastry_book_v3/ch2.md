## Getting your styles to hit the target

class and id inside your html are your styling hooks to target your styles

**type selector**

```css
p {
  color: black;
}
```

**descendent selector**

```css
div p {
  color: black;
}
```

**ID selector**

```css
#intro {
  font-weight: bold;
}
```

**Class selector**

```css
.recipe-title {
  color: gray;
}
```

We dont add id and class to all HTML elements that we want to style

```css
#selected-recipe h1 {
  color: gainsboro;
}
```

**Child selector**

```css
#nav > li {
  background-color: red;
}
```

**Adjecent sibling selector**
to target every p element that is ADJECENT SIBLING of h2 element.

```css
h2 + p {
  ....;
}
```

**General sibling selector**
to target every paragraph element that has a preceding sibling h2

```css
h2 ~ p {
  ....;
}
```

**Universal selector**
matches every element on the page.

```css
* {
  padding: 0;
}
```

**multi selector**

```css
h1,
h2,
h3 {
  ...;
}
```

### Normalize.css

https://necolas.github.io/normalize.css/
importing normalize will setup consistent padding and margins to consistent values across browsers.

### Attribute selectors

The follow rules are applied to only those abbr's which has title attribute.

```css
abbr[title] {
  border-bottom: 1px solid black;
}

abbr[title]:hover {
  cursor: help;
}
```

attribute with a value

```css
input[type="submit"] {
  cursor: pointer;
}
```

attribute beginning or ending with a value

```css
a[href^="http:"]
img[src$=".jpg"]
```

To match a value anywhere in the attribute

```css
/*links containing google word in them*/
a[href*="google"]::after {
}
```

another selection - it matches message or message-error

```css
a[hreflang|="message"] {
}
```

### Pseudo elements

When you want to target a part of your page and your dont want to litter your html with extra markup.

e.g. target first letter of a para graph liek this. They all come after double quotes

```css
p::first-letter {
  ...;
}
p::first-line {
  ...;
}
h1::before {
  content: url(smiley.gif);
}
h1::after {
  content: url(smiley.gif);
}
::selection {
  color: red;
  background: yellow;
}
```

Feel free to use any css properties for pseudo elements.

### Pesudo classes

**What are pseudo classes**

When you want to structure an element based on something other than the structure of the document.

- eg.
  - state of that element (link, form, input )

```css
a:link {
  color: blue;
}
a:visited {
  color: green;
}
a:hover,
a:focus {
  color: red;
}
a:active {
  color: purple;
}
```

:hover can be used for pretty much any element, but hover facility is not availabe on touch screens, so dont use it for essential functionality.

### Targets and Negetions

### Structural pseudo classes

### Getting clever with structural pseudo classes

### Form Pseudo classes

## The Cascade

## Specificity

## Inheritence

## Applying stylees to yoru document
