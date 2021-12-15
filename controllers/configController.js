//const { Resposta } = require('../models');

const configController = {
    index: (req, res) => {
        return res.render('./views/pages/config')
    },

    alterarSenha: (req, res) => {
        return res.render('./views/pages/alterarSenha')
    }
}

module.exports = configController;