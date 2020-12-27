### What versions should i use

- http://caniuse.com
  - search for a css property/module and find the percentage of browsers supporting it.
- http://webplatform.org
- MDN http://developer.mozilla.org gold standard

### Progressive enhancement

- Start by making it work for the lowest common denominator.
  but then feel free to take things further where they are supported.
- This may sound complicated, but the good news is that both HTML and CSS has this build in
- HTML
  - unknown element or attributes generally cause no trouble
    for the browser and they are simply ignored.
  - <!DOCTYPE html>
- http://html5forwebdesigners.com
- Book HTML 5 for web designers by Jeremy Keith
- Progressive enhancement for CSS,
  - Any properties that your browser do not recognizes are ignored.
  - take care of order in the below example. as the last rule is applied in older and newer browsers both.

```css
.overlay {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.8);
}
```

### Vender prefixes

- What was the purpose of vender prefixes?
  - Allowed browser makers to introduce new features while the
    specifications were missing or immature.
- Most vendors are turning away from these now.
  - Experimental features are hidden behind preference flags, or only for special preview releases.

### Conditional rules and detection scripts

- Modernizr - feature detection API
  - Modernizr is a small piece of JavaScript code that automatically detects the availability of next-generation web technologies in your user's browsers. Rather than blacklisting entire ranges of browsers based on “UA sniffing,” Modernizr uses feature detection to allow you to easily tailor your user's experiences based on the actual capabilities of their browser.
- https://modernizr.com/

```javascript 1.8
if (Modernizr.awesomeNewFeature) {
  showOffAwesomeNewFeature();
} else {
  getTheOldLameExperience();
}
```

### Creating structurally and semantically rich HTML

### Class and ID attributes

### Structural elements

### Using Divs and Spans

### ARIA Role attributes

### Microformats

- Look at recipe microformat
  - http://microformats.org/wiki/h-recipe

### MicroData

### Validation
