//type casting notes
{
  // method 1
  // const element =
  //     <HTMLInputElement>document.getElementById('text-input');

  // method 2: Use this one only in react projects, as the other angle bracket syntax may conflict with JSX
  const element = document.getElementById("text-input")! as HTMLInputElement;

  element.value = "Jai Siya Ram";
}

//null value management
{
  //method 1. if you are sure that the value will not yield null
  {
    const element = document.getElementById("text-input")! as HTMLInputElement;
    element.value = "Jai Sia Ram";
  }

  //method 2. if the element may or may not be there.
  {
    const element = document.getElementById("text-input");
    // note that we are not typecasting the element in the line above, if we typecast there,
    // we are also telling typescript that we are sure that this element exists.
    // so we are typecasting also within the if block only

    if (element) {
      (element as HTMLInputElement).value = "Jai Siya Ram";
    }
  }
}
