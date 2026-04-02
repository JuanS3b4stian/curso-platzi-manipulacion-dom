const button = document.querySelector("button");

// Uso de target
const buttonClicked = (event) => {
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.textContent);
};

button.addEventListener("click", buttonClicked);