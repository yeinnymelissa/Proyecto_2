class Usuario:
    def __init__(self, id, nombre, apellido, fecha_nac, sexo, nom_usuario, contraseña, telefono, puesto):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.fecha_nac = fecha_nac
        self.sexo = sexo
        self.nom_usuario = nom_usuario
        self.contraseña = contraseña
        self.telefono = telefono
        self.puesto = puesto
        
    def dump(self):
        return {
            'id': self.id,
            'nombre' : self.nombre,
            'apellido' : self.apellido,
            'fecha_nac': self.fecha_nac,
            'sexo' : self.sexo,
            'nom_usuario' : self.nom_usuario,
            'contraseña' : self.contraseña,
            'telefono' : self.telefono,
            'puesto': self.puesto
        }