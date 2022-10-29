from fastapi import FastAPI #FastAPI
import sqlite3  #base de datos

from pydantic import BaseModel #Creacion Modelos
from typing import Text, Optional #Tipos de datos y extras para Modelos
from uuid import uuid4 as uuid #Generar Id aleatorio Unico

#Modelo Categoria
class Categoria(BaseModel):
    id : Optional[str]  #id opcional ya que se le asigna desde la API
    nombre : str


app = FastAPI()
