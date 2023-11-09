
const { response, request } = require('express');


const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario79');

const { validationResult } = require('express-validator');

//http://localhost:8080/api0/usuarios?q=hola&nombre=bernar&apikey=123
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

const UsuariosPost = async (req, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        return res.status(404).json({
            msg: 'Ese correo ya esta registrado'
        })
    }

    const salt = bcryptjs.genSaltSync();

    // Guardar en BD

    await usuario.save();

    res.json({
        msg: 'post API - usuariosPost',
        usuario
    });

}



const UsuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: 'put API - Controlador',
        id
    });
}

const UsuariosPatch = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'patch API - Controlador',

    });
}

const UsuariosDelete = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'delete API - Controlador',

    });
}

module.exports = {
    UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosPatch,
    UsuariosDelete,
}