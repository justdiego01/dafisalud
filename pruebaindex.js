// function cargarSeccion() {
//     fetch('PRUEBA.html')
//       .then(function(response) {
//         return response.text();
//       })
//       .then(function(html) {
//         document.getElementById('seccionCargada').innerHTML = html;
//       })
//       .catch(function(error) {
//         console.log('Error al cargar la sección:', error);
//       });
//   }
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