//References to active elements
const userInput = document.getElementById("user-input");
const btn = document.getElementById("trigger-click");
const displayData = document.getElementById("display-data");
const err = document.querySelector(".error");

function addItem() {
    //Default value of error paragraph
    err.textContent = null;
    //removing whitespace
    userInput.value = userInput.value.trim();
    
    //if user input is not empty
    if(userInput.value !==""){
    let listItem = document.createElement("li");
    //assgining the value of text-field to the list item
    let line = document.createElement("hr");
    listItem.textContent = ">"+"   "+userInput.value;
    //Appending the new element to DOM
    displayData.appendChild(listItem);
    displayData.appendChild(line);
    } else {
        err.textContent = "Please enter a value";
    }

}

userInput.addEventListener("keyup", function () {
  if (event.keyCode === 13) {
    addItem()
  }
})

btn.addEventListener("click", addItem);