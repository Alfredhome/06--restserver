const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config79');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosPath = '/api0/usuarios';

        this.conectarDB();

        //Middelwares : Funciones que agrega mas funcionalidades
        this.middlewares();

        //Routas de mi aplicacion
        this.routes();
    }


    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

        this.app.use(cors());

        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'));
    }


    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios79'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }


}

module.exports = Server;