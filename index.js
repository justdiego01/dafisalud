const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const genero = document.querySelector('input[name="genero"]:checked');
const dni = document.getElementById("dni");
const fechnacimiento = document.getElementById("fechnacimiento");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const especialidad = document.getElementById("especialidad");
const btnregistro = document.getElementById("btnregistro");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!MyForm.checkValidity()) {
    MyForm.reportValidity();
    Swal.fire("Tienes que llenar todos los campos.", "", "info");
  } else {
    const data = {
      nombres: nombres.value,
      apellidos: apellidos.value,
      genero: genero.value,
      dni: dni.value,
      fechnacimiento: fechnacimiento.value,
      email: email.value,
      telefono: telefono.value,
      especialidad: especialidad.value
    };

    console.log(data);
  }
});
