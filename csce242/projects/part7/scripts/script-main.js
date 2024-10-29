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

/**** toggle user menu ****/ 
document.getElementById("user-img").onclick = (event) => {
    console.log("user menue");
    event.preventDefault();
    document.getElementById("user-menu").classList.toggle("hidden");
};


document.getElementById("user-img").onclick = (event) => {
    console.log("user menue");
    event.preventDefault();
    document.getElementById("user-menu").classList.toggle("hidden");
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("question");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const sendEmail = async(json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });

        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
};

document.getElementById("contact-form").onsubmit = async(e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    const httpResult = await sendEmail(json);

    if(httpResult.status == 200){
        result.innerHTML = "Email successfully sent";
    } else {
        result.innerHTML = "Sorry, your email wasn't sent";
    }
}