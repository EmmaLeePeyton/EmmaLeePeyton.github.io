/* When the hamburger is clicked, toggle between showing and hiding the nav items */
/*const Hamburger = document.getElementById("toggle-nav");
myButton.onclick = () => {
    document.getElementById("nav-items").toggle();
};*/ //attempt at it

// answer to toggling
document.querySelector("#toggle-nav").onclick = () => {
    console.log("You toggled the nav!");
    document.getElementById("nav-items").classList.toggle("hidden-small");
};


/* don't go to link's destination when clicked */
document.getElementById("click-link").onclick = (event) => {
    console.log("You clicked a link that goes nowhere");
    event.preventDefault(); // not go link destination
};

/* Change the ball color */
//way #1
/*document.getElementById("txt-color").onchange = (e) => {
    console.log("Color change on ball");
    console.log(e.target.value);
    document.getElementById("ball").style.setProperty("background-color", e.target.value);
};*/ //issue would be to define colors in js than css
//way #2
document.getElementById("txt-color").onchange = (e) => {
    console.log("Color change on ball");
    console.log(e.target.value); //on envoked target
    document.querySelector(":root").style.setProperty("--ball-color",e.target.value);
};
// neither is really better. Both are great options


/* move the ball down when the button is clicked */
let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    console.log(pos);
    document.getElementById("ball").style.setProperty("top", pos + "px");
};

/* Show color message */
document.getElementById("btn-show-color").onclick = () => {
    console.log("Show color function");
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    console.log(color);
    const messageP = document.getElementById("color-message");
    let mood = "";

    if(color == "red"){
        mood = "angry";
    }
    else if(color == "blue"){
        mood = "moody";
    }
    else{
        mood = "undefined";
    }
    //messageP.innerHTML = "You chose " + color + " so you are " + mood + ".";
    messageP.innerHTML = `You chose ${color} so you are ${mood}.`;
};

/* Donations */
/* get the number
-if it is not a number or a negative, show an error
OTHERWISE FIRST show percent out of 10000 towards goal
NEXT show visual representation with a box and gradient */

document.getElementById("btn-donate").onclick = () => {
    console.log("donations btn");
    const goal = 10000;
    const donation = document.getElementById("txt-donations").value;
    const error = document.getElementById("error-donation");
    error.innerHTML = ""; // clears previous error

    //if we got an invalid donation -> not a number or less than 0
    if(isNaN(donation) || donation < 0){
        error.innerHTML = "* Invalid";
        return;
    }

    const percentGoal = donation / goal * 100;
    console.log(percentGoal + "%");
    document.querySelector(":root").style.setProperty("--funds", percentGoal + "%")
};
