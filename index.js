// Write your code here!
const main = document.querySelector('#main');
const body = document.querySelector('body');
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Steve is the champion"
const h1 = document.getElementById("victory");


body.appendChild(newHeader);

