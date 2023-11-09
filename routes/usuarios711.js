const { Router } = require('express');
const Role = require('../models/role711');
const { check } = require('express-validator');
const { UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosPatch,
    UsuariosDelete } = require('../controllers/usuarios711');
const { validarCampos } = require('../middlewares/validar-campos711');

const router = Router();


router.get('/', UsuariosGet);
router.put('/:id', UsuariosPut);


router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol').custom(async (rol = '') => {
        const existeRol = await Role.findOne({ rol });
        if (!existeRol) {
            throw new Error(`El rol ${rol} no está registrado en la BD`)
        }
    }),
    validarCampos
], UsuariosPost);

router.delete('/', UsuariosDelete);

router.patch('/', UsuariosPatch);

router.get('/api', (req, res) => {
    res.send('Hello World Text')

});

router.get('/api2', (req, res) => {
    res.json({
        ok: true,
        msg: 'get API2'
    })
});

router.get('/api3', (req, res) => {
    res.status(403).json({
        ok: true,
        msg: 'get API3'
    })
});


module.exports = router;
