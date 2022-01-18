const express = require('express');
const controllerCofiguracao = require('../controllers/controllerCofiguracao');
const router = express.Router();

router.get('/alterarTema', (req, res) => {
    return res.render('pages/alterarTema')
})

//router.get('/alterarSenha', ccontrollerCofiguracao.alterarSenha)

router.get('/esqueciaSenha', (req, res) => {
    return res.render('pages/esqueciaSenha')
})

router.get('/devs', (req, res) => {
    return res.render('pages/devs')
})

module.exports = router;