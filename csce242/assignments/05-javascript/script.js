// alert("Hello World"); // alert after the page is loaded

/*
//scoping, no use var, can change
let 
//every variable is default unless it changes
const
*/

/* functions */
/*function doStuff() { //example to show how it works
    alert("hello");
}*/
// => : arrow syntax
const doStuff = () =>{
    alert("Hello world");
};

// Button
const myButton = document.getElementById("btn-say-hello");
//myButton.innerHTML = "Click Party"; //funsies to show change
//myButton.onclick = doStuff;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
}; //allows there to be little to no memory used

document.getElementById("btn-say-goodbye").onclick = () => {
    document.getElementById("message").innerHTML = "goodbye Everyone!";
    document.getElementById("stuff").classList.remove("special");
}; 

/*add second button, called say goodbye 
when clicked change text to goodbye everyone, and remove special style
*/

//showing data from an input field
/*
document.getElementById("txt-first-name").onkeyup = () => {
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;
};
*/

document.getElementById("txt-first-name").onkeyup = (event) => {
    document.getElementById("results").innerHTML = event.target.value;
};


let count = 0;

document.getElementById('.num-count').onclick = () => {
    count++;
    document.getElementById('.count').innerText = count;
};