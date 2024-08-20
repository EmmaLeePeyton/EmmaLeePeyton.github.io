let toys = ["drum", "ball", "rope", "balloon", "tire"];
let toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["dollHouse"] = 86.23;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 2;
toyPrices["bike"] = 5;

const showToys = () => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    /*
    for(let i in toys) {
        console.log(toys[i]);
    }
    */

    toys.forEach((toy)=>{
        //console.log(toy);
        const p = document.createElement("p");
        p.innerHTML = toy;
        resultDiv.append(p);
    });
};

const addToy = () => {
    console.log("adding a toy");
    const toy = document.getElementById("txt-toy").ariaValueMax;
    toys.push(toy);
    showToys();
};

const showToysTable = () => {
    console.log("showing table");
    const toyTable = document.getElementById("toy-table");

    for(let toy in toyPrices){
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = toy;
        tr.append(td);
        toyTable.append(tr);

        
        //embedded
        tr.onclick = () => {
            console.log(`you clicked ${toy}.`);
            const descP = document.getElementById("toy-description");
            descP.innerHTML = `${toy} costs $${toyPrices[toy]}.`;
        };
        
        /*
        //allow data to be passed to other function
        tr.onclick = showPrice.bind(null,toy);
        */
    }
}

const showPrice = (toy) => {
    console.log(toy);

}


showToys();
document.getElementById("button-add-toy").onclick = addToy;
showToysTable();