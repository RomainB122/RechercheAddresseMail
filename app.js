const addresse = document.querySelector("#addresse");
const select = document.getElementById("liste");
const inventory = [];

async function getData() {
    const response = await fetch('data.json');
    const data = await response.json();
    data.addresses.forEach(address => {
        let li = document.createElement("li");
        li.textContent = address;
        document.querySelector("ul").appendChild(li);
        inventory.push(address);
    });
}

function removeAddresse() {
    document.querySelector("ul").innerHTML = "";
}

function croissant() {
    const sortedInventory = inventory.sort(); 
    sortedInventory.forEach(address => {
        let li = document.createElement("li");
        li.textContent = address;
        document.querySelector("ul").appendChild(li);
    });
}

function decroissant() {
    const sortedInventory = inventory.sort().reverse(); 
    sortedInventory.forEach(address => {
        let li = document.createElement("li");
        li.textContent = address;
        document.querySelector("ul").appendChild(li);
    });
}

getData();

const button = document.getElementById("searchButton");
const rslt = document.getElementById("searchBar");

button.addEventListener("click", function () {
    removeAddresse();
    const found = inventory.filter(address => address.includes(rslt.value)); // Correction ici
    found.forEach(address => {
        let li = document.createElement("li");
        li.textContent = address;
        document.querySelector("ul").appendChild(li);
    });
});

const croissantButton = document.getElementById("croissant");

croissantButton.addEventListener("click", function () {
    removeAddresse();
    croissant();
});

const decroissantButton = document.getElementById("decroissant");

decroissantButton.addEventListener("click", function () {
    removeAddresse();
    decroissant();
});