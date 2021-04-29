from usuario import Usuario

class CRUD_Usuario:
    def __init__(self):
        self.usuarios = []

    def agregar(self, nombre, apellido, fecha_nac, sexo, nom_usuario, contraseña, telefono):
        self.usuarios.append(Usuario(len(self.usuarios), nombre, apellido, fecha_nac, sexo, nom_usuario, contraseña, telefono))

    def obtener_id(self, id):
        return [u for u in self.usuarios if u.id == id]

    def obtener_usuario(self, nom_usuario):
        return [u for u in self.usuarios if u.nom_usuario == nom_usuario]

    def obtener_general(self):
        return [usuario.dump() for usuario in self.usuarios]