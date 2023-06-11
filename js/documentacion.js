const nombresCompletosInput = document.getElementById("nombrecompleto")
const nombresInput = document.getElementById("nombres")

const storedData = JSON.parse(localStorage.getItem("data"));

if (storedData) {
  nombresCompletosInput.textContent = storedData.nombres;
  nombresInput.value = storedData.nombres;
}