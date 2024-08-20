let pos =0;

//functions
const colorSquare = () => {
    console.log("rainbow color change");
    document.getElementById("square").classList.add("rainbow");
    //document.querySelector("#square");
}; //function 1

const moveDown = () => {
    pos += 10;
    console.log("down");
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
}; //function 2

const addCircle = () => {
    console.log("adding a circle");
    const playground = document.getElementById("circle-playground");
    //playground.innerHTML = "test"; //only have one. overiding it.
    //playground.innerHTML += "test"; //concatinates it
    //WAY 1
    /*
    playground.innerHTML += "<section class='circle'></section>"; //hardcode adding
    */
    //WAY 2 -more common, more explicit
    const ball = document.createElement("section");
    ball.classList.add("circle");
    playground.append(ball);

    //access color from text box
    const color = document.getElementById("txt-color").value;
    //change color of all balls
    /*
    const root = document.querySelector(":root");
    root.style.setProperty("--ball-color", color);
    */
    ball.style.background = color; //change color of one ball

} //function 3

//calling functions
document.getElementById("btn-color").onclick = colorSquare; //function 1
document.getElementById("btn-move-down").onclick = moveDown; //function 2
document.getElementById("btn-add-circle").onclick = addCircle; //function 3

//homework
/*
Change Image
click image toggle image change

Slider
-picture rotates
-2d transform to rotate
--access slider
--access value

Stars
-clicked add image(star)

USE FLEX


*/