const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.render('./views/pages/config')
})

router.get('/alterarTema', (req, res) => {
    return res.render('./views/pages/alterarTema')
})

router.get('/alterarSenha', (req, res) => {
    return res.render('./views/pages/alterarSenha')
})

router.get('/esqueciaSenha', (req, res) => {
    return res.render('./views/pages/esqueciaSenha')
})

router.get('/devs', (req, res) => {
    return res.render('./views/pages/devs')
})

module.exports = router;