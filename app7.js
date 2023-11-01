//CONECTAR A BASE DE DATOS

require('dotenv').config();

const Server = require('./models/server6');
const server = new Server();

server.listen();