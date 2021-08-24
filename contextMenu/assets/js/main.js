
const contextElement = document.getElementById("context-menu");
const itemTable = document.querySelector(".item.table");
const body = document.querySelector("body");

window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("active");
});
window.addEventListener("click", function () {
  document.getElementById("context-menu").classList.remove("active");
});

const table = document.querySelector(".tables")


itemTable.addEventListener('click', function () {
  table.classList.add("active");
});




body.addEventListener("dragover", function (e) {
  e.preventDefault();
})

body.addEventListener("drop", function (e) {
  table.style.top = e.clientY - table.offsetHeight / 2 + "px";
  table.style.left = e.clientX - table.offsetWidth / 2 + "px";
});


