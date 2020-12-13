console.log("Your code goes here");

const button = document.querySelector('button');

if(button) {
    button.addEventListener("click", ($event) => {
        console.log('clicked!!');
    })
}
