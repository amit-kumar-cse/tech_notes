# The visual formatting model

* display: inline;
    * we can add horizontal spacing with padding, border and margin.
    * But padding, border and margin does not impact the height of the element.
    * setting explicit height and width will not have effect either.
* display: inline-block
    * the box lines up horizontally as inline.
    * but the box behaves as block, hence you can set explicitly width, 
      height, vertical margins and padding.
* Margin-collapsing
  * When 2 vertical margins meet, they will collapse to form a single margin,
    the height of this margin will be equal to height of larger of 2 
    collapsed margins.
    * it only happens with **vertical margins of block boxes**
    * Collapsing never happens with inline boxes, floated boxes, absolutely 
      positioned boxes.
* It only happens when the verti
