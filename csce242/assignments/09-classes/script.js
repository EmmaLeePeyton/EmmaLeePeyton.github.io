class Bird {
  constructor(title, size, lifeSpan, food, habitat, fact, pic) {
    this.title = title;
    this.size = size;
    this.lifeSpan = lifeSpan;
    this.food = food;
    this.habitat = habitat;
    this.fact = fact;
    this.pic = pic;
  }

  get item(){
    //make section with bird info then display
    const section = document.createElement("section");
    section.classList.add("bird");

    // create link
    const a = document.createElement("a");
    a.href = "#";
    section.append(a)

    //create header
    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    a.append(h3);

    //create image and add to first column
    a.append(this.picture(this.pic));

    return section;
  }


  picture(info){
    const pic = document.createElement("img");
    pic.src = "images/" + info + ".jpg";
    return pic;
  }

  showDetails() {
    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");
    const closeBtn = document.querySelector(".close-btn");   


    // Set modal content
    document.getElementById("modal-title").textContent = this.title;
    document.getElementById("modal-size").textContent = this.size;
    document.getElementById("modal-lifespan").textContent = this.lifeSpan;
    document.getElementById("modal-food").textContent = this.food;
    document.getElementById("modal-habitat").textContent = this.habitat;
    document.getElementById("modal-fact").textContent = this.fact;

    // Show modal
    modal.classList.remove("hidden");

    // Close modal on button click
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
  } 
/*
    //make section with dog info then display
    const section = document.createElement("section");
    section.classList.add("modal");

    //create header
    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    section.append(h3);

    // create columns
    const columnsDiv = document.createElement("div");
    section.append(columnsDiv);
    const firstColumn = document.createElement("div");
    columnsDiv.append(firstColumn);
    const secondColumn = document.createElement("div");
    columnsDiv.append(secondColumn);

    firstColumn.append(this.paragraph("Size", this.size));
    firstColumn.append(this.paragraph("Life Span", this.lifeSpan));
    firstColumn.append(this.paragraph("Food", this.food));
    firstColumn.append(this.paragraph("Habitat", this.habitat));
    firstColumn.append(this.paragraph("Fact", this.fact));
  
    secondColumn.append(this.picture(this.pic));
*/
}

const birds = [];
birds.push(new Bird("Summer Cardinal", "29.1 grams", 5, "bees and wasps", "open woodlands, forests, and even our backyards", "before they eat, they skillfully remove the stinger from their prey", "summer-tanager"));
birds.push(new Bird("Northern Cardinal", "29.1 grams", 5, "bees and wasps", "open woodlands, forests, and even our backyards", "before they eat, they skillfully remove the stinger from their prey", "northern-cardinal"));
birds.push(new Bird("Pine Grosbeak", "29.1 grams", 5, "bees and wasps", "open woodlands, forests, and even our backyards", "before they eat, they skillfully remove the stinger from their prey", "pine-grosbeak"));
birds.push(new Bird("Purple Finch", "29.1 grams", 5, "bees and wasps", "open woodlands, forests, and even our backyards", "before they eat, they skillfully remove the stinger from their prey", "purple-finch"));

birds.forEach((bird)=>{
  document.getElementById("bird-list").append(bird.item);
});
  
