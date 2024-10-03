//array
let imageArray = [];
imageArray["Birthday"] = "Happy Birthday!"; 
imageArray["Clown"] = "That was scary! EEP!";
imageArray["Rain"] = "Can't forget my umbrella!";
imageArray["Read"] = "I am halucinating right now...";
imageArray["Shovel"] = "Let It Grow!";
imageArray["Work"] = "Not this again...";

//create the table
const table = document.getElementById("img-container");
//count for table row length
let rowCheck = 0;

//Instantiating Array
for (let image in imageArray) {
    // create a new row
    if (rowCheck % 3 == 0) {
        tr = document.createElement("tr");
        table.append(tr);
    }rowCheck++;
    
    // populating the table
    let img = document.createElement("img"); //create image
    img.src = `./images/${image.toLowerCase()}.jpg`; //where to find image
    img.classList.add("img-block"); //adds image style
    let td = document.createElement("td"); //create data
    td.append(img);
    tr.append(td);
    
    //displayed on click
    td.onclick = () => {
        // name of image
        let name = document.getElementById("name");
        name.innerHTML = `${image}`;
        // description of image
        let description = document.getElementById("description");
        description.innerHTML = `${imageArray[image]}`;
    }
};