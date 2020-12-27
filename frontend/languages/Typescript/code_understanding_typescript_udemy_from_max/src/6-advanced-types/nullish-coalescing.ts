//older approach
{
  const userInput = "";
  const storedData = userInput || "DEFAULT";
  console.log(storedData);
  //issues, we want to consider only null or undefined as falsy values here. but since in js an empty string is also falsy,
  //this creates issues, nullish coelescing is to handle this issue.
}

//Typescript approach
{
  const userInput = undefined;
  const storedData = userInput ?? "DEFAULT";
  console.log(storedData);
}
