const ruta = "https://proyecto-2y.herokuapp.com/usuario";
const rutalogin = "https://proyecto-2y.herokuapp.com/usuario/login";

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


    let usuario = {
      nombre: obtener_nombre,
      apellido: obtener_apellido,
      fecha_nac: obtener_fnac,
      sexo: obtener_sexo,
      nom_usuario: obtener_nombreu,
      contraseña: obtener_contraseña,
      telefono: obtener_telefono,
      puesto: 3,
    };

    console.log(largo_contraseña.lenght); 

  fetch(ruta, {
    method: "PUT",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(function (response) {
      if (response.mensaje == "OK" && obtener_nombre != '' && obtener_apellido != '' && obtener_fnac != '' && obtener_sexo != '' && obtener_nombreu != '' && obtener_contraseña != '') {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        
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

function logIn() {
  const recibi_nombreu = document.getElementById("signin-nombreu");
  const recibi_contraseña = document.getElementById("signin-password");

  let login = {
    nom_usuario: recibi_nombreu.value,
    contraseña: recibi_contraseña.value,
  };

  console.log(login)

  fetch(rutalogin, {
    method: "POST",
    body: JSON.stringify(login),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => res.json())
  .then(response => {

    if(response.mensaje != "OK" || recibi_nombreu == "" || recibi_contraseña == ""){
      alert('Usuario o contraseña incorrectos')
      return;
    } else if (response.usuario.puesto == 0){
      alert("Bienvenido administrador");

      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      window.location.href = '/modulo-admin';
    } else if (response.usuario.puesto == 1){
      alert("Bienvenido enfermero");

      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      window.location.href = '/modulo-enfermeros';
    } else if (response.usuario.puesto == 2){
      alert("Bienvenido medico");

      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      window.location.href = '/modulo-medicos';
    } else if (response.usuario.puesto == 3){
      alert("Bienvenido paciente");

      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      window.location.href = '/modulo-pac';
    } 
  })
}




