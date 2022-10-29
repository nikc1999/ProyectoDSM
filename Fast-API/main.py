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
    respuesta = respuesta.fetchall()   #transforma la respuesta a una lista con tuplas
    con.commit()                       #efectua cambios en base
    con.close() 
    return respuesta

@app.post("/crearCategoria")
def crear_categoria(categoria : Categoria):
    categoria.id = str(uuid())
    con = sqlite3.connect("avance2.db")  
    cur = con.cursor()   
                   
    try:  #intenta ejecutar la query
        cur.execute(f"INSERT INTO Categoria VALUES('{categoria.id}','{categoria.nombre}')") 
    except sqlite3.IntegrityError: #si el error es de integridad cierra conexion y retorna error de integridad
        con.close()  #
        return "Error de Integridad"
        
    except:  #para cualquier otro tipo de error se cierrac conexion y retorna error generico
        con.close() 
        return "Error"
        
    con.commit()                       
    con.close()                        
    return "ok"

