const form = document.getElementById("formregister");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const generos = document.getElementsByName("genero");
const dni = document.getElementById("dni");
const fechnacimiento = document.getElementById("fechnacimiento");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valorSeleccionado;
  for (let i = 0; i < generos.length; i++) {
    if (generos[i].checked) {
      valorSeleccionado = generos[i].value;
      break;
    }
  }

  if (
    nombres.value.trim().length === 0 ||
    apellidos.value.trim().length === 0 ||
    !valorSeleccionado ||
    dni.value.trim().length === 0 ||
    fechnacimiento.value.trim().length === 0 ||
    email.value.trim().length === 0 ||
    telefono.value.trim().length === 0
  ) return Swal.fire("Debes llenar todos los campos.", "", "info");

  const data = {
    nombres: nombres.value,
    apellidos: apellidos.value,
    genero: valorSeleccionado,
    dni: dni.value,
    fechnacimiento: fechnacimiento.value,
    email: email.value,
    telefono: telefono.value
  };

  localStorage.setItem('data', JSON.stringify(data));
  window.location.href = "pages/citas.html";
});
