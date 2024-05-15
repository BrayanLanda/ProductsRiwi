const jwt = require('jsonwebtoken');//Importar librearia que se utiliza para generar y verificar tokens de autenticacion
const authMiddlewere = (req, res, next) => {//function que se ejecutara en el ciclo de vida de una solicitud http
    const token = req.header('Authorizatuin')?.split(' ')[1];//se utiliza operador encadenamiento opcional para manejar el caso de falla

    if(!token){//Validar token si esta presente
        return res.status(400).json(()=>{
            status: 'fail';
            message: 'Acceso no aoutorizado';
        });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);//Intenta verificar y codificar el token utilizando la function
        req.user = decoded;
        next();
    }catch(err){
        console.log(`Error ${err}`);
        res.status(401).json(() => {
            status: 'fail';
            message: 'Token invalido';
        });
    }
}

module.exports = authMiddlewere;//Exportar para que pueda ser actualizada