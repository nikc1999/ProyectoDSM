# ProyectoDSM


# Instalaciones en venv
pip install fastapi
pip install "uvicorn[standard]"
pip install jinja2

# Crear base de datos
1) Ejecutar el script crearBaseDatos.py

# FastApi

1) habilitar ejecucion de scripts power shell
2) abrir power shell en carpeta Fast-API
3) escribir ./scripts/activate
4) deberia aparecer entre parentecis (Fast-API)

5) ejecutar en la carpeta donde este main.py: py -m uvicorn main:app --host 0.0.0.0
6) servidor de api ejecutandose

7) Documentacion: para ver la documentacion de la api vaya a http://127.0.0.1:8000/docs en su navegador mientras el servidor de la api este ejecutandose