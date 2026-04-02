/*

// ---------- innerHTML & insertAdjacentHTML ----------

// Guardamos en un const el ID contentArea
const contentArea = document.getElementById("contentArea");
// Inyectamos un nuevo párrafo dentro de contentArea
contentArea.innerHTML = 
'<p>Este es un nuevo párrafo CAMBIADO con innerHTML</p>'

// Recibe dos parámetros [posición] [texto - valor]
contentArea.insertAdjacentHTML("beforeEnd",
"<p>Este es un nuevo párrafo Insertado en la posición beforeEnd con insertAdjacentHTML</p>");

contentArea.insertAdjacentHTML("beforeBegin",
"<p>Este es un nuevo párrafo Insertado en la posición beforeBegin con insertAdjacentHTML</p>");

// Concanetación === Bajo Performance
const listarea = document.getElementById('listarea'); 
listarea.innerHTML += '<li>item 5</li>';

// Mejor práctica, usar insertAdjacentHTML
listarea.insertAdjacentHTML('beforeend', 
'<li>Item número seis</li>');

*/

/*

// ---------- uso de createElement ----------

// Crear un nuevo elemento de párrafo
const newParagraph = document.createElement('p');

// Añadir contenido al párrafo
newParagraph.textContent = 'Fui creado con createElement';

// Verificar el elemento antes de la inyección
console.log(newParagraph);

// Inyección en el DOM

// Seleccionar el área de contenido donde se inyectará el nuevo elemento
const contentArea = document.getElementById('contentArea');

// Inyectar el nuevo párrafo al final del contenedor
contentArea.prepend(newParagraph);

const p2 = document.createElement('p');
p2.textContent = "Párrafo 2, con createElement";

contentArea.after(p2);

*/

// ---------- Eliminación - Métodos y Ejemplos de Uso ----------

const firstItem = document.querySelector('li'); 
firstItem.remove();

const list = document.querySelector('ul'); 
list.removeChild(list.firstElementChild);
list.removeChild(list.lastElementChild);