/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

document.getElementById("btn-loop").onclick = () => {
    console.log("Loop button was clicked");
    //const p = document.getElementById("result");
    const ul = document.getElementById("numbers");
    for(let i=0; i<10; i++){
        //p.innerHTML += i + " ";
        const li = document.createElement("li");
        li.innerHTML = i+1;
        ul.append(li);
        li.setAttribute("id", "li" + i);

        li.onclick = () => {
            console.log("An li was clicked");
            console.log(`i is currently ${i+1}`);
        };
    }
};

document.getElementById("btn-go").onclick = () => {
    console.log("go button was clicked");
    const start = parseInt(document.getElementById("txt-start").value);
    const end = parseInt(document.getElementById("txt-start").value);
    const ul = doc.getElementById("num-result");

    console.log(`counting from ${start} to ${end}`);

    for(let i=start; i<end; i++){
        //p.innerHTML += i + " ";
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.append(li);
        li.setAttribute("id", "li" + i);

        li.onclick = () => {
            console.log("An li was clicked");
            console.log(`i is currently ${i+1}`);
        };
    }
};



const createLi = (num) => {
    const li = document.createElement("li");
    li.setAttribute("id", "li" + num);

    li.onclick = () => {
        console.log(`i is currently ${i+1}`);
    }
};



let counter = 0;
let updateCount;

document.getElementById("btn-count").onclick = (e) => {
    const count = document.getElementById("count");

    if(e.target.innerHTML == "Start") {
        e.target.innerHTML = "Stop";
        updateCount = setInterval(()=>{
            counter++;
            count.innerHTML = counter;
        },1000);
    } else {
        e.target.innerHTML = "Start";
        clearInterval(updateCount);
    }
};


// Learning arrays
let toys = ["drum", "ball", "rope", "ballon", "tire"];
/*
for(let i=0; i<toys.length; i++){
    console.log(toys[i]);
}
*/
//can show index if needed
/*
toys.forEach((toy, i)=> {
    console.log(i+toy);
});
*/

toys.forEach((toy)=> {
    const p = document.createElement("p");
    p.innerHTML = toy;
    document.getElementById("list").append(p);
});

//Santa's expenses
let toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.23;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 5.3;
toyPrices["bike"] = 7.4;


/* Associative array */
const table = document.querySelector("#list-prices tbody");

for(let toy in toyPrices){
    let tr = document.createElement("tr");
    table.append(tr);
    const td1 = document.createElement("td");
    td1.innerHTML = toy;
    tr.append(td1);

    const td2 = document.createElement("td");
    td2.innerHTML = toyPrices[toy];
    tr.append(td2);

    tr.onclick = () => {
        console.log(toy + ": " + toyPrices[toy]);
    }
};