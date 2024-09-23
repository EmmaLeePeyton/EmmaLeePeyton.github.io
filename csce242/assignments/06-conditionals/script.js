document.querySelector("#toggle-nav").onclick = () => {
    console.log("You toggled the nav!");
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

document.getElementById("ex-one").onclick = (event) => {
    console.log("exercise 1");
    event.preventDefault(); // not go link destination
    document.getElementById("exercise-one").classList.remove("hidden");
    document.getElementById("exercise-two").classList.add("hidden");
};
document.getElementById("ex-two").onclick = (event) => {
    console.log("exercise 2");
    event.preventDefault(); // not go link destination
    document.getElementById("exercise-two").classList.remove("hidden");
    document.getElementById("exercise-one").classList.add("hidden");
};

const slider = document.querySelector('.slider');
const exerciseOne = document.getElementById('exercise-one');
const message = document.createElement('p');

slider.addEventListener('input', () => {
  const sliderValue = slider.value;
  const redValue = Math.floor((sliderValue / 100) * 255);
  const rgbColor = `rgb(${redValue}, 0, 0)`;

  exerciseOne.style.backgroundColor = rgbColor;

  if (redValue < 85) {
    message.textContent = "frusturated";
  } else if (redValue >= 85 && redValue < 170) {
    message.textContent = "angry";
  } else {
    message.textContent = "livid";
  }

  if (!exerciseOne.contains(message)) {
    exerciseOne.appendChild(message);
  }
});

const buttons = document.querySelectorAll('#exercise-two button');
const imageElement = document.getElementById('displayedImage');
buttons.forEach(button => button.addEventListener('click', handleButtonClick));

function handleButtonClick(event) {
    const clickedButton = event.target;
    let imageSize = "";
    // learned switch statement for this
    switch (clickedButton.id) {
        case "btn-small-pic":
            imageSize = "50/50";
            break;
        case "btn-medium-pic":
            imageSize = "100/100";
            break;
        case "btn-large-pic":
            imageSize = "200/200";
            break;
    }

    imageElement.src = `https://picsum.photos/${imageSize}`;
}