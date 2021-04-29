const ruta = ""

function registrarPaciente(event){
    event.preventDefault();
    let obtener_nombre = document.getElementById('signup-nombre').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 4 ~ registrarPaciente ~ obtener_nombre", obtener_nombre)
    let obtener_apellido = document.getElementById('signup-apellido').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 6 ~ registrarPaciente ~ obtener_apellido", obtener_apellido)
    let obtener_fnac = document.getElementById('signup-fecha').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 8 ~ registrarPaciente ~ obtener_fnac", obtener_fnac)
    let obtener_sexo = document.getElementById('signup-sexo').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 10 ~ registrarPaciente ~ obtener_sexo", obtener_sexo)
    let obtener_nombreu = document.getElementById('signup-nombreu').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 12 ~ registrarPaciente ~ obtener_nombreu", obtener_nombreu)
    let obtener_contraseña = document.getElementById('signup-password').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 14 ~ registrarPaciente ~ obtener_contraseña", obtener_contraseña)
    let obtener_telefono = document.getElementById('signup-telefono').value;
    console.log("🚀 ~ file: verificacion-paciente.js ~ line 16 ~ registrarPaciente ~ obtener_telefono", obtener_telefono)


    let paciente = {
        nombre: obtener_nombre,
        apellido: obtener_apellido,
        fecha: obtener_fnac,
        sexo: obtener_sexo,
        nombreu: obtener_nombreu,
        contraseña: obtener_contraseña,
        telefono: obtener_telefono
      };

}
