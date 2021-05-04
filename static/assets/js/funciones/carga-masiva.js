function cargaMasiva(puesto){
    let documento = document.getElementById('csv-enfermero').files[0];
      console.log(archivo);

    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
        procesarDocumento(event.target.result, puesto);
    });

    reader.readAsText(archivo, "UTF-8");
}

function procesarDocumento(texto, puesto) {
    const areadoc = document.getElementById("area-doc");
    let usuarios_array = [];
    console.log(texto);
  
    texto = texto.split("\n");
  
    texto.forEach((linea) => {
      if (linea != "") {
        let usuario_auxiliar = linea.split(",");
        areadoc.innerHTML += `
          Nombre: ${usuario_auxiliar[0]}
          Apellido: ${usuario_auxiliar[1]}
          Fecha: ${usuario_auxiliar[2]}
          Sexo: ${usuario_auxiliar[3]}
          Nombre: ${usuario_auxiliar[4]}
          Contraseña: ${usuario_auxiliar[5]}
          Telefono: ${usuario_auxiliar[6]}
          -------------------------------------
          `;
  
    /*    let usuario = {
            nombre: usuario_auxiliar[0],
            apellido: usuario_auxiliar[1],
            fecha_nac: usuario_auxiliar[2],
            sexo: usuario_auxiliar[3],
            nom_usuario: usuario_auxiliar[4],
            contraseña: usuario_auxiliar[5],
            telefono: usuario_auxiliar[6],
            puesto: puesto
        };
  
        usuarios_array.push(usuario);
      }
    });
  
    console.log(usuarios_array);
  
    let usuariosCM = {
      usuarios: usuarios_array,
    };
  
    fetch(`${ruta}/carga-masiva`, {
      method: "POST",
      body: JSON.stringify(usuariosCM),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.mensaje != "OK") {
          console.error(response.mensaje);
          //alert("Error al realizar la carga masiva");
          
          Swal.fire({
              title: "Carga masiva",
              text: "Error al realizar la carga masiva",
              icon: "error",
              timer: 1000,
              showConfirmButton: false,
            });
        }
  
        //alert("Carga masiva realizada con éxito");
        Swal.fire({
          title: "Carga masiva",
          text: "Carga masiva realizada con éxito",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });*/
        }
      });
  }