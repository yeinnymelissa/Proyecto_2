from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from usuario import Usuario
from CRUD_Usuario import CRUD_Usuario

usuarios = CRUD_Usuario()
app = Flask(__name__)
CORS(app)



@app.route('/usuario', methods=['PUT'])
def agregar_usuario():
    nombre = request.json['nombre']
    apellido = request.json['apellido']
    fecha_nac = request.json['fecha_nac']
    sexo = request.json['sexo']
    nom_usuario = request.json['nom_usuario']
    contraseña =  request.json['contraseña']
    telefono = request.json['telefono']

    id = usuarios.agregar(nombre, apellido, fecha_nac, sexo, nom_usuario, contraseña, telefono)
    return jsonify({"mensaje": "OK", 
    "paciente": {
      "nombre": nombre,
      "apellido": apellido,
      "fecha_nac": fecha_nac,
      "sexo": sexo,
      "nom_usuario": nom_usuario,
      "contraseña": contraseña,
      "telefono": telefono
    }
    }), 200


@app.route('/usuario/login', methods=['POST'])
def logIn():
    nom_usuario = request.json["nom_usuario"]
    contraseña = request.json["contraseña"]
    
    usuario = usuarios.login(nom_usuario, contraseña)

    if usuario:
        return jsonify({ "mensaje": "OK", "usuario": usuario}), 200
    else:
        return jsonify({ "mensaje": "Usuario o contraseña incorrectas"}), 404



@app.route('/usuario', methods=['GET'])
def obtener_usuario():
    return jsonify({"mensaje": "OK", "data": usuarios.obtener_general()})


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/modulo-admin')
def moduloadmin():
    return render_template('modulo-admin.html')

@app.route('/modulo-admin/pacientes')
def pacientes():
    return render_template('pacientes.html')
#
@app.route('/modulo-admin/enfermeros')
def enfermeros():
    return render_template('enfermeros.html')

@app.route('/modulo-admin/medicos')
def medicos():
    return render_template('medicos.html')

@app.route('/modulo-admin/medicamentos')
def medicamentos():
    return render_template('medicamentos.html')

@app.route('/modulo-pac')
def modulopac():
    return render_template('modulo-pacientes.html')

@app.route('/solicitarcita')
def solicitarcita():
    return render_template('solicitar-cita.html')

@app.route('/cuenta')
def cuenta():
    return render_template('account.html')

if __name__ == '__main__':
    app.run(threaded=True, debug=True, port=4000)

    