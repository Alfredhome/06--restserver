const { Router } = require('express');
const { UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosPatch,
    UsuariosDelete } = require('../controllers/usuarios');
    
const router = Router();

router.get('/', UsuariosGet);

router.put('/:id', UsuariosPut);

router.post('/', UsuariosPost);

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