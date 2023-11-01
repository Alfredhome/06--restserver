//visualizar como queremos ver el modelo de usuario en la base de datos 
//Mongo se graba en objetos
//Este modelo servira para hacer las interacciones con la base de datos 
//Trabajar la inserciön de datos en usuarios.js controllers se trabajara en 
//usuariosPost.
//Instalar mongoose npm i mongoose


const {Schema, model} = require('mongoose');

const UsuariosSchema = Schema({

    nombre: {
        type: String,
        required:[true, 'El nombre es obligario']
    },
    correo: {
        type: String,
        required:[true, 'El correo es obligario'],
        unique: true
    },
    password: {
        type: String,
        required:[true, 'El password es obligario'],
        unique: true
    },

    img:{
        type: String,
    },
    rol: {
        type: String,
        required:true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']

    },

    estado:{
        type: Boolean,
        default: true
    },

    google:{
        type: String,
        default: false
    }

});

module.exports = model('Usuario', UsuariosSchema);
