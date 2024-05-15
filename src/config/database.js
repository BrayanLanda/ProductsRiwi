const { Pool } = require('pg');//Importa clase pool del modulo pg que es ima biblioteca de nodejs para interactuar con db PostgresSQL

if(!process.env.DATABASE_URL){
    throw new Error('DATABASE_URL no esta definida en el archivo .env');//Vereficar si la variable de entorno DATA esta definidad
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });//Crea una nueva instancia de Pool utilizando un acadena de conexion a la base de datos


module.exports = { pool };//Exporta pool para que de otra parte realicen consultas a la base de datos