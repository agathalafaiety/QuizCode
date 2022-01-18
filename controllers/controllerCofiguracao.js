const Configuracao = require('../models/Index');

const controllerCofiguracao = {
    index: async (req, res) => {
        const configuracao = await Configuracao.findAll();
        return res.json(configuracao)
    },

    show: async (req, res) => {
        const id = req.params.id;
        const configuracao = await Configuracao.findOne({ where: { id } });

        if (configuracao == null) {
            return res.status(404).json({ mensagem: 'Configuracão não encontrada' })
        }

        return res.json(configuracao)
    }
}

module.exports = controllerCofiguracao;