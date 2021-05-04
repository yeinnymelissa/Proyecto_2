const ruta = "https://proyecto-2y.herokuapp.com/usuario";
let plantillaHTML = "";

function cargarUsuarios(posicion) {
  const body_usuarios = document.getElementById("body-usuarios");

  fetch(ruta, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      let usuarios = response.data;

      let filas = "";


    if (usuario.puesto == posicion){
      usuarios.forEach((usuario) => {
        filas += `\n<tr>
        <td class="cell">${usuario.id}</td>
        <td class="cell">${usuario.nombre}</td>
        <td class="cell">${usuario.apellido}</td>
        <td class="cell">${usuario.fecha_nac}</td>
        <td class="cell">${usuario.sexo}</td>
        <td class="cell">${usuario.telefono}</td>
        </tr>`;
      });
    }

      $("#body-usuarios").empty();
      $("#body-usuarios").append(filas);

      plantillaHTML = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      
          <title>Reporte usuarios</title>
      
          <link rel="icon" href="./images/favicon.png" type="image/x-icon" />
      
          <style>
            body {
              font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
              text-align: center;
              color: #777;
            }
      
            body h1 {
              font-weight: 300;
              margin-bottom: 0px;
              padding-bottom: 0px;
              color: #000;
            }
      
            body h3 {
              font-weight: 300;
              margin-top: 10px;
              margin-bottom: 20px;
              font-style: italic;
              color: #555;
            }
      
            body a {
              color: #06f;
            }
      
            .invoice-box {
              max-width: 800px;
              margin: auto;
              padding: 30px;
              border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
              font-size: 16px;
              line-height: 24px;
              font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
              color: #555;
            }
      
            .invoice-box table {
              width: 100%;
              line-height: inherit;
              text-align: left;
              border-collapse: collapse;
            }
      
            .invoice-box table td {
              padding: 5px;
              vertical-align: top;
            }
      
            .invoice-box table tr td:nth-child(2) {
              text-align: right;
            }
      
            .invoice-box table tr.top table td {
              padding-bottom: 20px;
            }
      
            .invoice-box table tr.top table td.title {
              font-size: 45px;
              line-height: 45px;
              color: #333;
            }
      
            .invoice-box table tr.information table td {
              padding-bottom: 40px;
            }
      
            .invoice-box table tr.heading td {
              background: #eee;
              border-bottom: 1px solid #ddd;
              font-weight: bold;
            }
      
            .invoice-box table tr.details td {
              padding-bottom: 20px;
            }
      
            .invoice-box table tr.item td {
              border-bottom: 1px solid #eee;
            }
      
            .invoice-box table tr.item.last td {
              border-bottom: none;
            }
      
            .invoice-box table tr.total td:nth-child(2) {
              border-top: 2px solid #eee;
              font-weight: bold;
            }
      
            @media only screen and (max-width: 600px) {
              .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
              }
      
              .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
              }
            }
          </style>
        </head>
      
        <body>
          <div class="invoice-box">
            <table>
              <tr class="top">
                <td colspan="2">
                  <table>
                    <tr>
                      <td class="title">
                        <h4>Hospital USAC</h4>
                      </td>
      
                      <td>Fecha creación: ${new Date().toLocaleDateString("es-US")}<br /></td>
                    </tr>
                  </table>
                </td>
              </tr>
      
              <tr class="information">
                <td colspan="2">
                  <table>
                    <tr>
                      <td>
                        Sparksuite, Inc.<br />
                        12345 Sunny Road<br />
                        Sunnyville, TX 12345
                      </td>
      
                      <td>
                        USAC.<br />
                        Cesar<br />
                        cesar@example.com
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
      
            <table>
              <tr class="heading">
                <td>ID</td>
                <td>Nombre</td>
                <td>Correo</td>
                <td>Edad</td>
                <td>Fecha nacimiento</td>
              </tr>`;

      usuarios.forEach((usuario) => {
        plantillaHTML += `\n<tr class="item">
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellido}</td>
                <td>${usuario.fecha_nac}</td>
                <td>${usuario.sexo}</td>
                <td>${usuario.telefono}</td>
              </tr>\n`;
      });

      plantillaHTML += `</table>
          </div>
        </body>
      </html>`;

      console.log(plantillaHTML);
    })
    .catch((err) => console.log(err));
}

function generarReporte() {
  html2pdf().from(plantillaHTML).toPdf().save("reportetabla.pdf");
}