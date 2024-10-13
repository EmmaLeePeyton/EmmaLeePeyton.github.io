const getCocktails = async() => {
  //async: do functions in the background
  console.log("getCocktails");
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  
  try {
    //http request results in a http response
    const response = await fetch(url);
    return response.json();
  } catch(error) {
    console.log(error);
  }
};

//needs to be async to call an async function
const showCocktails = async() => {
  console.log("showDrinks");
  const drinks = await getCocktails();
  const cocktails = drinks.drinks;
  console.log(cocktails);

  cocktails.forEach((cocktail) => {
    document.getElementById("cocktails").append(getCocktailSection(cocktail));
  });

};

const getCocktailSection = (cocktail) => {
  //main section
  const section = document.createElement("section");
  // create image/ingredients section
  const imgIngSection = document.createElement("section");
  imgIngSection.classList.add("cocktail");
  section.append(imgIngSection);

  // create image section
  const imgSection = document.createElement("section");
  imgSection.classList.add("one");
  imgIngSection.append(imgSection);
  
  //image size of section
  const img = document.createElement("img");
  img.src = cocktail.strDrinkThumb;
  imgIngSection.append(img);

  // create ingredients section
  const ingerdientsSection = document.createElement("section");
  ingerdientsSection.classList.add("one");
  imgIngSection.append(ingerdientsSection);

  const ul = document.createElement("ul");
  section.append(ul);
  

  for(i=0; i<10; i++) {
    console.log("forloop");

  }

  // shoe.reviews.forEach((review)=>{
  //   console.log(review);
  //   const li = document.createElement("li");
  //   li.innerHTML = review;
  //   ul.append(li);
  // });

  // button 
  // const drinkBtn = document.createElement("button");
  // section.classList.add("cocktail-btn");
  // drinkBtn.innerHTML = iceCream.name;
  // section.append(drinkBtn);


  return section;
}

//show all of the cocktails when the page loads
showCocktails();