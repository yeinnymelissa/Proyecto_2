const ruta = "https://proyecto-2y.herokuapp.com/usuario";

function registrarPaciente(event){
    event.preventDefault();
    let obtener_nombre = document.getElementById('signup-nombre').value;
    let obtener_apellido = document.getElementById('signup-apellido').value;
    let obtener_fnac = document.getElementById('signup-fecha').value;
    let obtener_sexo = document.getElementById('signup-sexo').value;
    let obtener_nombreu = document.getElementById('signup-nombreu').value;
    let obtener_contraseña = document.getElementById('signup-password').value;
    let obtener_telefono = document.getElementById('signup-telefono').value;


    let paciente = {
      nombre: obtener_nombre,
      apellido: obtener_apellido,
      fecha_nacimiento: obtener_fnac,
      sexo: obtener_sexo,
      nombreusuario: obtener_nombreu,
      contraseña: obtener_contraseña,
      telefono: obtener_telefono,
    };

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


