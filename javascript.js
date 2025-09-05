let boxContainer = document.querySelector(".box-container");
let box;
for (i = 0; i < 256; i++) {
  box = document.createElement("div")
  box.classList.add("box")
  boxContainer.appendChild(box)
}

boxContainer.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "black" )