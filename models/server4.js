//uso del CORS

const express = require('express');
const cors = require('cors');

class Server{


    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosPath = '/api0/usuarios';

        //Middelwares : Funciones que agrega mas funcionalidades
        this.middlewares();

        //Routas de mi aplicacion
        this.routes();
    }

    middlewares() {

        this.app.use(cors());

        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;
