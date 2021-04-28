from flask import Flask, request, jsonify
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
    fecha_nac = request.json['fecha de nacimiento']
    sexo = request.json['sexo']
    nom_usuario = request.json['usuario']
    contraseña =  request.json['contraseña']
    telefono = request.json['telefono']

    usuarios.agregar(nombre, apellido, fecha_nac, sexo, nom_usuario, contraseña, telefono)
    return jsonify({"mensaje": "OK", "Usuario": usuarios.obtener_general()})


@app.route('/usuario', methods=['GET'])
def obtener_usuario():
    return jsonify({"mensaje": "OK", "data": usuarios.obtener_general()})

if __name__ == '__main__':
    app.run(threaded=True, debug=True, port=4000)

    