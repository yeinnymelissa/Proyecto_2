from usuario import Usuario

class CRUD_Usuario:
    def __init__(self):
        self.usuarios = []

    def agregar(self, nombre, apellido, fecha_nac, sexo, nom_usuario, contraseña, telefono):
        id = len(self.usuarios)
        self.usuarios.append(Usuario(id, nombre, apellido, fecha_nac, sexo, nom_usuario, contraseña, telefono, puesto))
        return id

    def obtener_id(self, id):
        for usuario in self.usuarios:
            if usuario.id == id:
                return usuario.dump()

        return None

    def login(self, nom_usuario, contraseña):
        for usuario in self.usuarios:
            if usuario.nom_usuario == nom_usuario and usuario.contraseña == contraseña:
                return usuario.dump()
        
        return None

    def obtener_general(self):
        return [usuario.dump() for usuario in self.usuarios]