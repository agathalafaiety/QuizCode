const { Pergunta } = require('../models');

const perguntaController = {
    index: async (req, res) => {
        const perguntas = await Pergunta.findAll();
        return res.json(perguntas)
    },

    show: async (req, res) => {
        const id = req.params.id;
        const perguntas = await Pergunta.findOne({where: { id }});

        if (perguntas == null) {
            return res.status(404).json({mensagem: 'Pergunta não encontrada'})
        }

        return res.json(perguntas)
    }
}

module.exports = perguntaController;