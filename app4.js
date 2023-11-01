

require('dotenv').config();

const Server = require('./models/server3');

const server = new Server();

server.listen();
