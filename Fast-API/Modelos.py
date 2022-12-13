from pydantic import BaseModel #Creacion Modelos
from typing import Text, Optional #Tipos de datos y extras para Modelos

#Modelo Categoria
class Categoria(BaseModel):
    id : Optional[str]  #id opcional ya que se le asigna desde la API
    nombre : str

class EditarCategoria(BaseModel):
    nombreActualCategoria : str
    nuevoNombre : str

class Producto(BaseModel):
    id : Optional[str]
    nombre : str
    precio : int
    stock : int
    descripcion : str
    categoria: str

class Mesa(BaseModel):
    id: str

class Pedido(BaseModel):
    id : Optional[str]
    totalPagar: int
    horaEstimada: Optional[str]
    mesa: str
    idProducto: str
    nombreProducto: str
    cantidadProducto: int
