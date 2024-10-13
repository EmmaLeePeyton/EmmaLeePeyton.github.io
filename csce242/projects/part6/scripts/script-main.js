// toggle nav
document.querySelector("#toggle-nav").onclick = () => {
    console.log("toggled nav");
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/**** toggle submenues ****/ 
// who menue
document.getElementById("who").onclick = (event) => {
    console.log("who menue");
    event.preventDefault();
    document.getElementById("who-nav").classList.toggle("hidden");
};

document.getElementById("chapters").onclick = (event) => {
    console.log("chapters menue");
    event.preventDefault();
    document.getElementById("chapters-nav").classList.toggle("hidden");
};