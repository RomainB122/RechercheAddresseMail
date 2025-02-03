
const addresse = document.querySelector("#addresse");
const select = document.getElementById("liste");
const inventory = [];

async function getData() {
    const response = await fetch('data.json');
    const data = await response.json();
    data.addresses.forEach(data => {
        let li = document.createElement("li");
        li.textContent = data;
        document.querySelector("ul").appendChild(li);
        inventory.push({ addresse: data });

    });
}

function removeAddresse() {
    select.innerHTML = "";
}

getData();

const button = document.getElementById("searchButton");
const rslt = document.getElementById("searchBar");

console.log(inventory)
button.addEventListener("click",
    function () {
        removeAddresse();
        const found = inventory.filter((item)=>{
            return item.addresse.includes(rslt.value);
        });
        //select.innerHTML = found.addresse;
        
        found.forEach(data =>{

            let li = document.createElement("li");
        li.textContent = data.addresse;
        document.querySelector("ul").appendChild(li);
 

        });
    })