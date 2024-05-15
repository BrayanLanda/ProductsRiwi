require('dotenv').config();//Cargar configuracion de variables de entorno

const { pool } = require('./config/database');//Importar la instancia del objeto pool, para configurar y exportar un objeto de conexion utilizando la biclioteca pg para PostgresSQL
const app = require('./app');//Importar la instancia de la aplicacion express desde app.js el cual contiena la configuracion 

const port = process.env.PORT || 3000;//Puerto en el que se ejecutara el servidor, utilizar la variable de entorno port