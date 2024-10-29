/*fetch("jsons/events.json")
  .then(response => response.json()
  .then(value => console.log(value)))
*/

  const getEvent = async() => {
    console.log("getEvent");
    const url = "jsons/events.json";
  
    try {
      //http request results in a http response
      const response = await fetch(url);
      return response.json();
    } catch(error) {
      console.log(error);
    }
  };
  
  const showEvent = async() => {
    console.log("showEvent");
    const events = await getEvent();
    console.log(events);
  
    events.forEach((event) => {
      document.getElementById("events-section").append(getEventSection(event));
    });
  
  };
  
  const getEventSection = (event) => {
    // create main section
    const section = document.createElement("section");
    section.classList.add("event");

    const descriptionP = document.createElement("p");
    if(event.name == "default"){
      descriptionP.innerHTML = event.description;
      section.append(descriptionP);
    }
    
  
    return section;
  }
  
  //show all of the shoes when the page loads
  showEvent();
  
  