import sqlite3

from datetime import datetime

from typing import Text, Union, Optional

from fastapi import FastAPI
from pydantic import BaseModel

from uuid import uuid4 as uuid
# Modelo de Noticia
class Noticia(BaseModel):
    id : str
    title : str
    author: str
    content: Text
    created_at: datetime = datetime.now()
    published_at: Optional[datetime]   #opcional
    published: bool = False

lista_noticias = []

class Pedido(BaseModel):
    id: str
    totalPagar: int
    mesaId: str
    tiempoEspera: Optional[int] #minutos

lista_pedidos = []

app = FastAPI()




students = {
    1: {
        "name": "john",
        "age": 17,
        "class": "year 12"
    },
    2: {
        "name": "Alise",
        "age": 23,
        "class": "year 10"
    }
}

#=== Base de datos ===








@app.get("/")
def read_root():
    con = sqlite3.connect("avance2.db")
    cur = con.cursor()
    cur.execute("SELECT * FROM pedido")
    respuesta = cur.fetchall()
    print(respuesta)
    con.commit()
    con.close()
    return respuesta

@app.post("/pedido")
def save_pedido(pedido: Pedido):
    pedido.id = str(uuid())
    print(pedido)
    lista_pedidos.append(pedido)

    #=== guardar en base datos
    con = sqlite3.connect("avance2.db")
    cur = con.cursor()
    cur.execute(f"INSERT INTO pedido VALUES ('{pedido.id}',{pedido.totalPagar},'{pedido.mesaId}',60)")
    con.commit()  #guarda los cambios en la base de datos
    con.close()
    return "Pedido Cargado"



@app.get("/noticias")
def get_noticias():
    return lista_noticias




@app.post("/noticias")
def save_noticia(noticia : Noticia):
    noticia.id = str(uuid())
    print(noticia.dict())
    lista_noticias.append(noticia.dict())
    return "Noticia Cargada"





@app.get("/get-student/{student_id}")
def get_student(student_id: int):
    return students[student_id-1]
