const nombresInput = document.getElementById("nombres")

const storedData = localStorage.getItem("data");

if (storedData) {
  const data = JSON.parse(storedData);
  
  nombresInput.value = data.nombres;
}