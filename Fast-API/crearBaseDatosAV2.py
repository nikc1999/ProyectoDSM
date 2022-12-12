import sqlite3
#=== Base de datos ===
con = sqlite3.connect("avance2.db")
con.execute("PRAGMA foreign_keys = 1")
cur = con.cursor()


# tablas
cur.execute("CREATE TABLE Categoria(Nombre TEXT PRIMARY KEY)")
cur.execute("CREATE TABLE Producto(CodProducto TEXT PRIMARY KEY, Nombre TEXT, Precio INTEGER, Stock INTEGER, Descripcion TEXT,Categoria NOT NULL, FOREIGN KEY(Categoria) REFERENCES Categoria(Nombre))")
cur.execute("CREATE TABLE Mesa(idMesa TEXT PRIMARY KEY)")
cur.execute("CREATE TABLE Pedido(idPedido TEXT PRIMARY KEY, TotalPagar INTEGER,HoraEstimada TEXT, Mesa TEXT,idProducto TEXT,NombreProducto TEXT,CantidadProducto INTEGER, FOREIGN KEY(Mesa) REFERENCES Mesa(idMesa), FOREIGN KEY(idProducto) REFERENCES Producto(CodProducto))")

con.commit()                       
con.close() 
print(sqlite3.sqlite_version)
