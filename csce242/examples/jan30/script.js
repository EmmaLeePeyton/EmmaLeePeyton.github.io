//alert("hello");


//started every variable with "var" is global variable - DO NOT USE
//js is a loosely typed coding language
//let - variable that can change
//const - constant variable
/*
function doStuff() {
    alert("doing stuff");
}
*/
//variable type, variable name, parameters, then what the function does
//EXAMPLE: const doStuff = () => { alert("doing stuff") };
const doStuff = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello! ... youuuuu! :)";
    //messageP.className = "special"; //WRONG
    messageP.classList.toggle("special");
};

const hideImage = () => {
    document.getElementById("place-hold").classList.add("hidden");
    //document.getElementById("place-hold").src =... //homework
};


//const clickButton = document.getElementById("btn-click");//get button
document.getElementById("btn-click").onclick = doStuff; //why make variable used once
//document.getElementById("btn-click").onclick = () => { alert("stuff") };//anonymous function
//clickButton.onclick = doStuff;//calls function on click of button
//clickButton.onclick = doStuff(); //still on page load
//doStuff(); calls the function on load
document.getElementById("place-hold").onclick = hideImage;




