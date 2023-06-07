const nombresCompletosInput = document.getElementById("nombrecompleto")
const nombresInput = document.getElementById("nombres")

const storedData = localStorage.getItem("data");

if (storedData) {
  const data = JSON.parse(storedData);
  
  nombresCompletosInput.textContent = data.nombres;
  nombresInput.value = data.nombres;
}