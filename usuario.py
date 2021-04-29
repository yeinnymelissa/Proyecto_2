class Usuario:
    def __init__(self, id, nombre, apellido, fecha_nac, sexo, nom_usuario, contraseña, telefono):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.fecha_nac = fecha_nac
        self.sexo = sexo
        self.nom_usuario = nom_usuario
        self.contraseña = contraseña
        self.telefono = telefono
        
    def dump(self):
        return {
            'id': self.id,
            'nombre' : self.nombre,
            'apellido' : self.apellido,
            'fecha de nacimiento' : self.fecha_nac,
            'sexo' : self.sexo,
            'usuario' : self.nom_usuario,
            'contraseña' : self.contraseña,
            'telefono' : self.telefono
        }