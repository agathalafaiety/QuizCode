const express = require('express');
const configController = require('../controllers/configController');
const router = express.Router();

router.get('/alterarTema', (req, res) => {
    return res.render('pages/alterarTema')
})

//router.get('/alterarSenha', configController.alterarSenha)

router.get('/esqueciaSenha', (req, res) => {
    return res.render('pages/esqueciaSenha')
})

router.get('/devs', (req, res) => {
    return res.render('pages/devs')
})

module.exports = router;