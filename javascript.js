container = document.querySelector(".container");


for (i = 0; i < 256; i++) {
  let box = document.createElement("div")
  box.textContent = "u";
  container.appendChild(box)
}