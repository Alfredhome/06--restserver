const { Router } = require('express');
const { check } = require('express-validator');
const { UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosPatch,
    UsuariosDelete } = require('../controllers/usuarios710');
const { validarCampos } = require('../middlewares/validar-campos710');

const router = Router();

router.get('/', UsuariosGet);

router.put('/:id', UsuariosPut);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y mas de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es valido').isEmail(),
    check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
], UsuariosPost);

router.delete('/', UsuariosDelete);

router.patch('/', UsuariosPatch);

//end-point ejemplo text

router.get('/api', (req, res) => {
    res.send('Hello World Text')
});

//end-point ejemplo json
router.get('/api2', (req, res) => {
    res.json({
        ok: true,
        msg: 'get API2'
    })
});

//end-point, 403 cuando se hace un llamado ilegal
//peticion o autorizada

router.get('/api3', (req, res) => {
    res.status(403).json({
        ok: true,
        msg: 'get API3'
    })
});


module.exports = router;