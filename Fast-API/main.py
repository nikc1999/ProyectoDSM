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

lista_temp_categorias = []


@app.get("/")
def ruta_raiz():
    con = sqlite3.connect("avance2.db")  #conecta base de datos
    cur = con.cursor()                  #crea un cursor
    respuesta = cur.execute("SELECT * FROM Categoria")   #ejecuta query
    print(respuesta)
    respuesta = respuesta.fetchall()   #transforma la respuesta a una lista con tuplas
    print(respuesta)
    con.commit()                       #efectua cambios en base
    con.close() 
    return respuesta

@app.post("/crearCategoria")
def crear_categoria(categoria : Categoria):
    categoria.id = str(uuid())
    #print(categoria)
    #lista_temp_categorias.append(categoria)

    #Base de datos
    con = sqlite3.connect("avance2.db")  #conecta base de datos
    cur = con.cursor()                  #crea un cursor
    cur.execute(f"INSERT INTO Categoria VALUES('{categoria.id}','{categoria.nombre}')")                      #ejecuta query'
    con.commit()                       #efectua cambios en base
    con.close()                        # cierra conexion
    return "ok"

