const image1 = document.getElementById("change-img");
const imageChange = () => {
    image1.classList.toggle("new-image");
};
image1.onclick = imageChange;

const addStar = () => {
    console.log("adding a star");
    const playground = document.getElementById("star-playground");
    const star = document.createElement("section");
    star.classList.add("icon");
    playground.append(star);
}
document.getElementById("box03").onclick = addStar;