const getBreweries = async() => {
  //async: do functions in the background
  console.log("getBreweries");
  const url = "https://api.openbrewerydb.org/breweries";
  
  try {
    //http request results in a http response
    const response = await fetch(url);
    return response.json();
  } catch(error) {
    console.log(error);
  }
};

const showBreweries = async() => {
  console.log("showBreweries");
  const breweries = await getBreweries();
  console.log(breweries);

  breweries.forEach((brewery)=>{
    const section = document.createElement("section");
    section.classList.add("brewery");
    document.getElementsById("breweries-section").append(section);


    const a = document.createElement("a");
    a.href = brewery.website_url;
    section.append(a);
    const h3 = document.createElement("h3");
    h3.innerHTML = brewery.name;
    a.append(h3);

    const typeP = document.createElement("p");
    typeP.innerHTML = brewery.brewery_type;
    a.append(typeP);
  });

};


showBreweries();