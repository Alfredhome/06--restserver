
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config711');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api0/usuarios';

        this.conectarDB();
        this.middlewares()
        this.routes();

    }
    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios711'));
        //porbar get, post, put, delete
        //visitiar http://localhost:8080/api0/usuarios
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port);
        });
    }

}

module.exports = Server;