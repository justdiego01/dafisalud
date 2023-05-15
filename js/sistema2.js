function cargarHTML(archivoHTML) {
  var seccionCargada = document.getElementById('seccionCargada');
  
  fetch(archivoHTML)
    .then(function(response) {
      return response.text();
    })
    .then(function(html) {
      seccionCargada.innerHTML = html;
    })
    .catch(function(error) {
      console.log('Error al cargar el HTML:', error);
    });
}