import sqlite3
#=== Base de datos ===
con = sqlite3.connect("avance2.db")
cur = con.cursor()


# tablas
cur.execute("CREATE TABLE pedido(id, totalPagar, mesaId, tiempoEspera)")
