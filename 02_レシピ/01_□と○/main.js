const figure = document.getElementById("figure")
const figureTwo = document.getElementById("figure_2")

figure.onclick = function() {
  figure.classList.toggle("rounded")
}

figureTwo.ondblclick = function() {
  figureTwo.classList.toggle("rounded")
}
