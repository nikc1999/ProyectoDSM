import sqlite3
#=== Base de datos ===
con = sqlite3.connect("avance2.db")
cur = con.cursor()


# tablas
cur.execute("CREATE TABLE Producto(CodProducto, Nombre, Precio, Cantidad, Descripcion)")
cur.execute("CREATE TABLE Categoria(idCategoria, Nombre)")
