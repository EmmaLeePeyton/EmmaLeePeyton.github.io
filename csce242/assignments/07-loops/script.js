// call ons
const countInput = document.getElementById("star-count");
const draw = document.getElementById("btn-draw");
const container = document.getElementById("star-container");
const error = document.getElementById("error");

// draws star(s) using a "*" character
draw.addEventListener("click", () => {
	const count = parseInt(countInput.value);
	if (count <= 0) {
		error.textContent = "Please enter a valid positive number.";
		return;
	}
	error.textContent = "";
	container.innerHTML = "";
	for (let i = 0; i < count; i++) {
		const star = document.createElement("span"); //is a span becaise if set to a p, it escapes the box
		star.textContent = "*"; //my star
		star.classList.add("star"); //adds the star(s) to the box

		//star position
		star.style.left = `${Math.random() * 390}px`; 
		star.style.top = `${Math.random() * 290}px`;

		//when a star is clicked message alert pops up
		star.addEventListener("click", () => {
			const message = `You clicked on star ${i + 1}`;
			alert(message); // Replace with a more visually appealing message display
		});

		// physically puts the star in the box
		container.appendChild(star);
	}
});