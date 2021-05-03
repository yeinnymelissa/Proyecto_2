const ruta = "http://localhost:4000/usuario";

function registrarPaciente(event){
    event.preventDefault();
    let obtener_nombre = document.getElementById('signup-nombre').value;
    let obtener_apellido = document.getElementById('signup-apellido').value;
    let obtener_fnac = document.getElementById('signup-fecha').value;
    let obtener_sexo = document.getElementById('signup-sexo').value;
    let obtener_nombreu = document.getElementById('signup-nombreu').value;
    let obtener_contraseña = document.getElementById('signup-password').value;
        largo_contraseña = obtener_contraseña.split('');
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

    console.log(largo_contraseña.lenght); 

  fetch(ruta, {
    method: "PUT",
    body: JSON.stringify(paciente),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(function (response) {
      if (response.mensaje == "OK" && obtener_nombre != '' && obtener_apellido != '' && obtener_fnac != '' && obtener_sexo != '' && obtener_nombreu != '' && obtener_contraseña != '') {
        localStorage.setItem("paciente", JSON.stringify(paciente));
        
        alert("Paciente creado correctamente");
        window.location.href = "/login";
      }else if(obtener_nombre == '') {
        alert("No ha ingresado un nombre");
      }else if(obtener_apellido == '') {
        alert("No ha ingresado un apellido");
      }else if(obtener_fnac == '') {
        alert("No ha ingresado su fecha de nacimiento");
      }else if(obtener_sexo == '') {
        alert("No ha ingresado su sexo");
      }else if(obtener_nombreu == '') {
        alert("No ha ingresado un nombre de usuario");
      }else if(obtener_contraseña == '') {
        alert("No ha ingresado una contraseña");
      }

      // Recuperar usuario del local storage
      //let paciente = JSON.parse(localStorage.getItem("paciente"))
    })
    .catch((error) => console.log(error));
  }





