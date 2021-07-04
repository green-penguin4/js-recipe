const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const display = document.getElementById("display")

button1.onclick = function() {
  display.textContent = "残念！ねこ派かな"
}

button2.onclick = function() {
  display.textContent = "コメント"
}

button3.onclick = function() {
  display.textContent = "コメント"
}
