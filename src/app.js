require('dotenv').config();//sirve para cargar las variables de entorno definidas en un archivo .env
const express = require('express');//Importar modulo express que es un marco de aplicaciones web para nodejs, facilita creacion de servidores
const cors = require('cors');//Importa modulo cors que es un middleware de express para hablitar el intercambio de recursos entre diferentes origenes
const router = require('./routes/router');//importa el enrutar pricipal de la aplicacion 

const app = express();//Crear instancia de la aplicaion Express

//Middelewares
app.use(cors());//Habiblita el middlewere cors para permitir solicitudes de diferentes dominios
app.use(express.json());//Habilita el middlewere express.json() para anilizar el cuerpo de las solicitudes con formato JSON y almacenarlos en req.body

//Rutas
app.get('/api', router);//Utiliza el enrutar importado router para manejar todas las solicitudes que comiencen con /api, esto permite moduladizar las rutas de la api u manejarlas de manera central


module.exports = app;//Exporta la instancia de la aplicacion para poder ser usada desde otros archivos

