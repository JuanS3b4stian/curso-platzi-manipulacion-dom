// Acceder a un elemento por su ID
const title = document.querySelector("#app-title")
console.dir(title);

// Buscamos la propiedad textContent (Dentro del document - HTML)
title.textContent = "Nuevo Texto";

/* Dentro del HTML (consola) también se cambia el valor
   Los cambios se ven reflejados también en el navegador
*/

title.innerText = "Nuevo texto con InnerText";