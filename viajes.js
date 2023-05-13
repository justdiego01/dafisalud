// LISTAR VIAJES
function listar() {
    Swal.fire({
    title: 'LISTA DE VIAJES',
    html: '<b>Cargando...</b>',
    timer: 200,
    didOpen: () => {
        Swal.showLoading()
    }
    });

    $.ajax({
        url:'http://localhost:3999/api/viajes',
        type:'GET',
        success: function(respuesta){
            console.log(respuesta);
            var dataFila ='';
            var tablaViaje = respuesta.dataViajes;
            if(tablaViaje.length > 0){
                for (const i in tablaViaje) {
                    var varViaje = tablaViaje[i];
                    dataFila += "<tr>";
                    dataFila += "<td>" + varViaje.idviaje + "</td>";
                    dataFila += "<td>" + varViaje.nombre + "</td>";
                    dataFila += "<td>" + varViaje.edad + "</td>";
                    dataFila += "<td>" + varViaje.destino + "</td>";
                    dataFila += "<td>" + varViaje.salida + "</td>";
                    dataFila += "<td>" +
                                "<button type='button' class='btn btn-warning' data-toggle='modal' data-target='#myModal' onclick='buscar("
                                + varViaje.idviaje + ")'>Editar</button>"+
                                "</td>";
                    dataFila += "</tr>";
                }
                document.getElementById('dataViajes').innerHTML = dataFila;
            }
        }
    });
}

function guardar() {
    if(!MyForm.checkValidity()){
        MyForm.reportValidity();
        Swal.fire('Tienes que llenar todos los campos.','','info')
     }else{Swal.fire({
        title: 'Esta seguro que quieres guardar los cambios ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
        $.ajax({
            url:'http://localhost:3999/api/viajes/save',
            type: 'POST',
            data: {
                idviaje: $("#txtidviaje").val(),
                nombre: $("#txtnombre").val(),
                edad: $("#txtedad").val(),
                destino: $("#txtdestino").val(),
                salida: $("#txtsalida").val()
            },
            success: function(respuesta){
                console.log(respuesta);
                listar();
            }
        });
        Swal.fire('Se guardaron los cambios!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Cambios no guardados', '', 'info')
        }
    });
    }
}

function buscar(idviaje) {
    $.ajax({
        url:'http://localhost:3999/api/viajes/' +idviaje,
        type: 'GET',
        success: function(respuesta){
            console.log(respuesta);
            var varViaje = respuesta.viaje;
            $("#txtidviaje").val(varViaje.idviaje);
            $("#txtnombre").val(varViaje.nombre);
            $("#txtedad").val(varViaje.edad);
            $("#txtdestino").val(varViaje.destino);
            $("#txtsalida").val(varViaje.salida);
        }
    })
}
function limpiarForm(){
    $("#txtidviaje").val(0);
    $("#txtnombre").val("");
    $("#txtedad").val("");
    $("#txtdestino").val("");
    $("#txtsalida").val("");
}