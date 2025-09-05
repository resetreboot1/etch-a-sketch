let container = document.querySelector(".container");
let box;
for (i = 0; i < 256; i++) {
  box = document.createElement("div")
  box.classList.add("box")
  container.appendChild(box)
}

container.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "black" )