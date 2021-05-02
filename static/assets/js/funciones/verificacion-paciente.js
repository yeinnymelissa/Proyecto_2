const ruta = "http://localhost:4000/usuario";

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
      fecha_nac: obtener_fnac,
      sexo: obtener_sexo,
      nom_usuario: obtener_nombreu,
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
      console.log(response);
    })
    .catch((error) => console.log(error));
}    


