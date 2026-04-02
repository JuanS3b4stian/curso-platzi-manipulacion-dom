const form = document.getElementById("myForm");

// Añadimos el Listener al evento "submit"
form.addEventListener("submit", (event) => {

  // Prevenimos su comportamiento por default (Recarga de página)
  event.preventDefault();

  // Almacenamos el nombre del formulario por su atributo "name"
  const name = form.elements["name"].value;
  console.log(name);

  // Validamos que el nombre tenga más de 3 letras
  if (name.length < 3) {
    alert("El nombre necesita más de 3 letras");
    return;
  }

  // Almacenamos el email del formulario por su atributo "email"
  const email = form.elements["email"].value;
  console.log(email);

  // Validamos que tenga al menos un símbolo de @
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }

  // Si cumple todas las condiciones, envíamos un alert de éxito
  alert("Formulario enviado exitosamente!");

  // Imprimimos la información por partes
  console.log(`El nombre del usuario es: ${name} y su correo es: ${email}`);

  // Creamos un objeto con la información del form
  const formData = {
    name: name,
    email: email,
  };

  // Imprimimos toda la info como un objeto
  console.log(formData);
});