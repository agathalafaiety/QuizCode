//const { Resposta } = require('../models');

const configController = {
    index: (req, res) => {
        return res.render('pages/config')
    },

    alterarSenha: (req, res) => {
        return res.render('pages/alterarSenha')
    }
}

module.exports = configController;