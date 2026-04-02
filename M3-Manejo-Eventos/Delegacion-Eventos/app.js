/*// Almacenamos cada elemento que sea un li
const listItems = document.querySelectorAll("li");

// Ciclo forEach sobre cada listItems
listItems.forEach((item) => {
    // Se añade el listener al evento "click"
    item.addEventListener("click", (event) => {
    // toggle (on / off) para aplicar/quitar la clase highlight de nuestro bloque CSS
    event.target.classList.toggle("highlight");
    });
});*/

// Dellegation Pattern (Se le asigna al Nodo Padre)
const list = document.querySelector("ul");

// Se añade el listener al evento "click"
list.addEventListener("click", (event) => {
  // Al target más cercano se le aplicará el evento
  event.target.closest("li").classList.toggle("highlight");
});