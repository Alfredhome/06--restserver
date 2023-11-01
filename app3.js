//Agregar GET, POST, PUT, DELETE
//probar con postman http://localhost:8081/api con html y analizar
//probar con postman http://localhost:8081/api con json y analizar

require('dotenv').config();

const Server = require('./models/server2');

const server = new Server();

server.listen();




