
const express = require('express')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();

        this.routers();
    }

    middlewares() {
        this.app.use(express.static('public'));

    }

    routers() {
        this.app.get('/api', (req, res) => {
            res.send('Hello Wolrd')
        });

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);

        });
    }
}

module.exports = Server;