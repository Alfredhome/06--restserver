require('dotenv').config();

const Server = require('./models/server79');
const server = new Server();

server.listen();