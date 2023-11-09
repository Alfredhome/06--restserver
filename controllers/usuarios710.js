const { response, request } = require('express');
// Se require el paquete bcryptjs para encriptar contraseña
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario710');

const UsuariosGet = (req = request, res = response) => {
    const { q, nombre = 'No name', apikey } = req.query;

    res.json({
        ok: true,
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    })
}


//validamos los errores

const UsuariosPost = async (req, res = response) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol })

    const existeEmail = await Usuario.findOne({ correo })
    if (existeEmail) {
        return res.status(400).json({
            msg: 'ese correo ya esta registrado'
        })
    }
    //encripta la contraseña
    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password, salt)

    //guarda en DB
    await usuario.save()
    res.json({
        msg: 'post Api - usuariosPost',
        usuario
    })
}

const UsuariosPut = (req, res = response) => {
    const { id } = req.params
    res.json({
        ok: true,
        msg: 'put API - Controlador',
        id
    })
}

const UsuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'putch API - Controlador',
    })
}

const UsuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - Controlador',
    })
}

module.exports = {
    UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosPatch,
    UsuariosDelete,
}