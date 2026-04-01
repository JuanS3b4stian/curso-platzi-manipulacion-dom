// ---------- Navegación descendente ----------

console.log("---------- NAVEGACIÓN DESCENDENTE ----------");

// Padre
console.log("Padre");
const parent = document.getElementById("parent")
console.log(parent);

// Hijos
console.log("Hijos");
const children = parent.children;
console.log(children);

// Primer Hijo
console.log("Primer Hijo");
const firstChild = parent.firstElementChild;
console.log(firstChild);

// Último Hijo
console.log("Último Hijo");
const lastChild = parent.lastElementChild;
console.log(lastChild);

// ---------- Navegación Hermanos ----------

console.log("---------- NAVEGACIÓN HERMANOS----------");

// Hermano Previo
console.log("Hermano Previo");
const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

// Hermano Posterior
console.log("Hermano Posterior");
const nextSibling = parent.nextElementSibling;
console.log(nextSibling);

// ---------- Ascendente ----------

console.log("---------- NAVEGACIÓN ASCENDENTE ----------");

// Hijo
console.log("Hijo");
const children2 = document.querySelector("li");
console.log(children2);

// Padre (primera forma)
console.log("Padre (Primera Forma)");
const parent2 = children2.parentNode;
console.log(parent2);

// Padre (segunda forma)
console.log("Padre (Segunda Forma)");
const grandParent = children2.parentElement;
console.log(grandParent);

// Navegación Ancestros Lejanos

console.log("---------- NAVEGACIÓN ACENSTROS LEJANOS----------");

// Bisabuelo
console.log("Bisabuelo");
const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log(grandGrandParent);