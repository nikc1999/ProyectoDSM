import sqlite3
#=== Base de datos ===
con = sqlite3.connect("avance2.db")
con.execute("PRAGMA foreign_keys = 1")
cur = con.cursor()


# tablas
cur.execute("CREATE TABLE Categoria(Nombre TEXT PRIMARY KEY)")
cur.execute("CREATE TABLE Producto(CodProducto TEXT PRIMARY KEY, Nombre TEXT, Precio INTEGER, Stock INTEGER, Descripcion TEXT,Categoria NOT NULL, FOREIGN KEY(Categoria) REFERENCES Categoria(Nombre))")
con.commit()                       
con.close() 
print(sqlite3.sqlite_version)
