from fastapi import FastAPI, Request #FastAPI , request 
import sqlite3  #base de datos

from pydantic import BaseModel #Creacion Modelos
from typing import Text, Optional #Tipos de datos y extras para Modelos
from uuid import uuid4 as uuid #Generar Id aleatorio Unico

from fastapi.templating import Jinja2Templates  #template engine (muestra las vistas)
from fastapi.responses import HTMLResponse 
#Modelo Categoria
class Categoria(BaseModel):
    id : Optional[str]  #id opcional ya que se le asigna desde la API
    nombre : str


app = FastAPI()


templates = Jinja2Templates(directory="templates")


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

@app.get("/verCategoria", response_class=HTMLResponse)
def test_template(request: Request):
    con = sqlite3.connect("avance2.db")
    cur = con.cursor()
    categorias = cur.execute("SELECT Nombre FROM Categoria")
    categorias = categorias.fetchall()
    con.commit()
    con.close()
    return templates.TemplateResponse("test.html", {"request": request, "CategoriasUwU": categorias})
