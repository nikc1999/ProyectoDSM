import sqlite3
#=== Base de datos ===
con = sqlite3.connect("avance21p.db")
cur = con.cursor()


# tablas
cur.execute("CREATE TABLE Producto(CodProducto TEXT PRIMARY KEY, Nombre, Precio, Cantidad, Descripcion)")
cur.execute("CREATE TABLE Categoria(idCategoria TEXT PRIMARY KEY, Nombre TEXT NOT NULL UNIQUE)")
