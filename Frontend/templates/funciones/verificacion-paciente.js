const ruta = "https://localhost:4000/usuario";

function registrarPaciente(event){
    event.preventDefault();
    let obtener_nombre = document.getElementById('signup-nombre').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 6 ~ registrarPaciente ~ obtener_nombre", obtener_nombre)
    let obtener_apellido = document.getElementById('signup-apellido').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 8 ~ registrarPaciente ~ obtener_apellido", obtener_apellido)
    let obtener_fnac = document.getElementById('signup-fecha').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 10 ~ registrarPaciente ~ obtener_fnac", obtener_fnac)
    let obtener_sexo = document.getElementById('signup-sexo').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 12 ~ registrarPaciente ~ obtener_sexo", obtener_sexo)
    let obtener_nombreu = document.getElementById('signup-nombreu').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 14 ~ registrarPaciente ~ obtener_nombreu", obtener_nombreu)
    let obtener_contraseña = document.getElementById('signup-password').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 16 ~ registrarPaciente ~ obtener_contraseña", obtener_contraseña)
    let obtener_telefono = document.getElementById('signup-telefono').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 18 ~ registrarPaciente ~ obtener_telefono", obtener_telefono)


    let paciente = {
        nombre: obtener_nombre,
        apellido: obtener_apellido,
        fecha: obtener_fnac,
        sexo: obtener_sexo,
        nombreu: obtener_nombreu,
        contraseña: obtener_contraseña,
        telefono: obtener_telefono
      };

    /*fetch(ruta, {
        method: "PUT",
        body: JSON.stringify(paciente),
        headers: {
        "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .then(function (response) {
        console.log(response);
    })
    .catch((error) => console.log(error));*/

    
  fetch(ruta, {
    method: "PUT",
    body: JSON.stringify(paciente),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(function (response) {
      if (response.mensaje == "OK") {
        localStorage.setItem("paciente", JSON.stringify(paciente));
        //alert("Usuario creado correctamente");
        Swal.fire({
          title: "Registro",
          text: `Paciente creado correctamente`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        window.location.href = "index.html";
      }else{
        Swal.fire({
          title: "Registro",
          text: `No se pudo registrar al paciente`,
          icon: "warning",
          timer: 1500,
          showConfirmButton: false,
        });
      }

      // Recuperar usuario del local storage
      // let usuario = JSON.parse(localStorage.getItem("usuario"))
    })
    .catch((error) => console.log(error));
}

