// ----- Clonación -----

// ID contetArea
const contentArea = document.querySelector('#contentArea'); 

// Almacenamos el primer párrafo dentro de contentArea
const originalP = contentArea.querySelector('p')

// Clonamos (si no se coloca true, devuelve un nodo vacío)
const clonParrafoVacio = originalP.cloneNode();
console.dir(clonParrafoVacio)

// Deep Clone
const clonParrafo = originalP.cloneNode(true);
console.dir(clonParrafo)

// Inyección y Modificación del Clon

contentArea.append(clonParrafo);
clonParrafo.textContent = 'Este es un nuevo texto';

// ---------- Reemplazamiento -----

const list = document.querySelector('#listArea'); 
const itemToReplace = list.children[2];

// Reemplazamos 
itemToReplace.replaceWith(clonParrafo);