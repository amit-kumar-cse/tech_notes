//generic array type
{
  const namesArr: string[] = ["Amit"];
  const names: Array<string> = ["Kumar"];
  const names1: Array<string | number> = [];
  const names2: Array<any> = [];

  names[0].split(" ");
}

//Promises
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done"); // if i pass anything but a number here, i am getting an error
  }, 2000);
});

promise.then((value) => {
  console.log(value.split(" ")); // i am getting a nice intellisense here.
});
