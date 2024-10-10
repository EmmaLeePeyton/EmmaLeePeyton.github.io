const getIceCream = async() => {
  console.log("getIceCream");
  const url = "https://portiaportia.github.io/json/ice-creams.json";

  try {
    //http request results in a http response
    const response = await fetch(url);
    return response.json();
  } catch(error) {
    console.log(error);
  }
};

const showIceCream = async() => {
  console.log("showIceCream");
  const iceCreams = await getIceCream();
  console.log(iceCreams);

  iceCreams.forEach((iceCream) => {
    document.getElementById("ice-cream-section").append(getIceCreamSection(iceCream));
  });

};

const getIceCreamSection = (iceCream) => {
  // create main section
  const section = document.createElement("section");
  section.classList.add("ice-cream");

  //image size of section
  const img = document.createElement("img");
  img.src = "https://portiaportia.github.io/json/images/ice-creams/" + iceCream.image;
  section.append(img);

  /*** 
   * create new section, add id= "${ice-Cream}-name", 
   * give class hidden, 
   * put p in it
   * 
   * on hover of "ice-cream" section, remove hidden class
  ***/
  const sectionTwo = document.createElement("section");
  sectionTwo.id = `${iceCream.name}-name`;
  sectionTwo.classList.add("name", "hidden");
  section.append(sectionTwo);

  const nameP = document.createElement("p");
  nameP.innerHTML = iceCream.name;
  sectionTwo.append(nameP);

  section.onmouseover = () => {
    // console.log("inside");
    sectionTwo.classList.remove("hidden");
  };

  section.onmouseout = () => {
    // console.log("inside");
    sectionTwo.classList.add("hidden");
  };

  /*
  // hover events
  section.addEventListener("mouseover", () => {
    sectionTwo.classList.remove("hidden");
    console.log("hidden gone");
  });
  section.addEventListener("mouseout", event => {
    sectionTwo.classList.add("hidden");
    console.log("hidden added");
  });
*/
  return section;
}

//show all of the shoes when the page loads
showIceCream();

