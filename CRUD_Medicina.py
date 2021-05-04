from medicina import Medicina

class CRUD_Medicina:
    def __init__(self):
        self.medicinas = []

    def agregar(self, id, nombre, precio, descripcion, cantidad):
        id = len(self.medicinas)
        self.medicinad.append(Usuario(id, nombre, precio, descripcion, cantidad))
        return id

    def obtener_id(self, id):
        for medicina in self.medicinas:
            if usuario.id == id:
                return usuario.dump()

        return None


    def obtener_general(self):
        return [medicina.dump() for medicina in self.medicinas]