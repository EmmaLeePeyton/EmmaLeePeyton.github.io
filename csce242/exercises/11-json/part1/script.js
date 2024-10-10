const getShoes = async() => {
  //async: do functions in the background
  console.log("getShoes");
  const url = "https://portiaportia.github.io/json/shoes.json";
  
  try {
    //http request results in a http response
    const response = await fetch(url);
    return response.json();
  } catch(error) {
    console.log(error);
  }
};

//needs to be async to call an async function
const showShoes = async() => {
  //console.log("showShoes");
  const shoes = await getShoes();
  //console.log(shoes);

  shoes.forEach((shoe) => {
    document.getElementById("shoes-section").append(getShoeSection(shoe));
  });

};

const getShoeSection = (shoe) => {
  const section = document.createElement("section");

  const h3 = document.createElement("h3");
  h3.innerHTML = shoe.name;
  section.append(h3);

  const brandP = document.createElement("p");
  brandP.innerHTML = shoe.brand;
  section.append(brandP);

  const ul = document.createElement("ul");
  section.append(ul);

  shoe.reviews.forEach((review)=>{
    console.log(review);
    const li = document.createElement("li");
    li.innerHTML = review;
    ul.append(li);
  });

  return section;
}

//show all of the shoes when the page loads
showShoes();