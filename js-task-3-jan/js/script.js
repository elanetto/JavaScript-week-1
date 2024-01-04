
// 1. Modify Heading Styles
// select the <h1> element and change its text to "Welcome to JavaScript Class"

const heading1 = document.querySelector("h1");
console.log("first heading 🤩: ",heading1);
heading1.textContent = "Welcome to JavaScript Class";

// Change the color of the <h1> element to "blue" and increase the font size to "2rem"

heading1.style.color = "blue";
heading1.style.fontSize = "4rem";


// 2. Interactive List Modification
// Create a button saying "Add Item" in javascript and add it to the HTML document

let button = document.createElement("button");
button.textContent = "Add Item";
document.body.appendChild(button);


// When the button is clicked, add a new <li> to the existing list with the text "New Item" and a random number. 

const list = document.querySelector("ul");
console.log("list 🤩: ",list); 

button.addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = "New Item " + Math.floor(Math.random()*20);
    list.appendChild(newItem);
    newItem.style.color = "red";
}   );  // end of button event listener


// Hesh's solution

const myBtn = document.querySelector("button");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

myBtn.addEventListener("click", function() {
    let someRandomNumber = getRandomInt(220);

    list.innerHTML += `<li>New Item ${someRandomNumber}</li>`
});