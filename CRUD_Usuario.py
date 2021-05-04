from usuario import Usuario

class CRUD_Usuario:
    def __init__(self):
        self.usuarios = []
        self.usuarios.append(Usuario('0', 'Ariel', 'Bautista', "", "M", "admin", "1234", "", "0"))

    def agregar(self, nombre, apellido, fecha_nac, sexo, nom_usuario, contraseña, telefono, puesto):
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

    def cargaMasiva(self, usuarios_cm):
        for usuario in usuarios_cm:
            self.agregar(usuario['nombre'], usuario['apellido'], usuario['fecha_nac'], usuario['sexo'], usuario['nom_usuario'], usuario['contraseña'], usuario['telefono'], usuario['puesto'])
        return "OK"   

    def obtener_general(self):
        return [usuario.dump() for usuario in self.usuarios]