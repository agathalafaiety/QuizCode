const express = require('express');
const configController = require('../controllers/configController');
const router = express.Router();

router.get('/', configController.index
)

router.get('/alterarTema', (req, res) => {
    return res.render('./views/pages/alterarTema')
})

router.get('/alterarSenha', configController.alterarSenha
)

router.get('/esqueciaSenha', (req, res) => {
    return res.render('./views/pages/esqueciaSenha')
})

router.get('/devs', (req, res) => {
    return res.render('./views/pages/devs')
})

module.exports = router;