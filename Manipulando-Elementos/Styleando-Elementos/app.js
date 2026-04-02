// Cambiar el color a un título usando style
const title = document.querySelector('h1'); 
title.style.color = 'red';
title.style.color = 'blue';

// Cambiar el color de background del menú
const menu = document.querySelector('menu'); 
menu.style.backgroundColor = 'red';

// Cambiar la fuente del menú
menu.style.fontSize = '25px';
menu.style.fontSize = '30px';

// Cambiar el color al primer párrafo que encuentre querySelector
const parrafo = document.querySelector('p');
parrafo.style.color = "blue";
parrafo.style.color = "orange";

// Uso de className 

menu.className = "main-menu";

// Uso de classList

const button = document.querySelector("button")
// Agregar un evento a button
button.addEventListener("click", () => {
    // Añade a la clase "invisible"
    menu.classList.toggle("invisible")
});