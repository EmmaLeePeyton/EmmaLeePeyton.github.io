const image1 = document.getElementById("change-img");
const imageChange = () => {
    image1.classList.toggle("new-image");
};
image1.onclick = imageChange;

// i could not figure this out. I started panicing.

//I really tried with this one. I about had a panic trying to do it. 
//The stress of some things is really getting to me. I'm sorry I couldn't do it.
const addStar = () => {
    console.log("adding a star");
    const playground = document.getElementById("star-playground");
    const star = document.createElement("section");
    star.classList.add("icon");
    playground.append(star);
}
document.getElementById("box03").onclick = addStar;
