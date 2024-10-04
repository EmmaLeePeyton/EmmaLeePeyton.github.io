// toggle nav
document.querySelector("#toggle-nav").onclick = () => {
    console.log("You toggled the nav!");
    document.getElementById("nav-items").classList.toggle("hidden-small");
};
