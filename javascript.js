let boxContainer = document.querySelector(".box-container");
let choiceButton = document.querySelector(".choice-button");
let gridValue;
let box;
let adaptingBoxSize;
let totalGrids;

function assignGrids(num) {
  if (gridValue < 1) {
    return alert("The minimum number of grids is 1.")
  }

  if (gridValue > 100) {
    return alert("The maximum number of grids is 100.")
  }

  if (gridValue > 0 && gridValue < 101){
    boxContainer.innerHTML = ""
    adaptingBoxSize = (100 / gridValue).toFixed(10);
    box.style.width = `${adaptingBoxSize}%`
    box.style.height = `${adaptingBoxSize}%`


   for (j = 0; j < num; j++) { 
    box = document.createElement("div")
    box.classList.add("box")
    box.style.width = `${adaptingBoxSize}%`
    box.style.height = `${adaptingBoxSize}%`
    boxContainer.appendChild(box)
   }
  }
  
}

for (i = 0; i < 256; i++) {
  box = document.createElement("div")
  box.classList.add("box")
  boxContainer.appendChild(box)
}

boxContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box"))
  e.target.style.backgroundColor = "black" 
})

choiceButton.addEventListener("click", (e) => {
  gridValue = prompt("Choose a number between 1-100", "16")
  totalGrids = gridValue * gridValue;
  
  assignGrids(totalGrids)
})
