require('dotenv').config();
const Server = require('./models/server710');
const server = new Server();
server.listen();
