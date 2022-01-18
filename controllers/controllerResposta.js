const { Resposta } = require('../models/Index');

const controllerResposta = {
    index: async (req, res) => {
        const respostas = await Resposta.findAll();
        return res.json(respostas)
    },

    show: async (req, res) => {
        const id = req.params.id;
        const respostas = await Resposta.findOne({ where: { id } });

        if (respostas == null) {
            return res.status(404).json({ mensagem: 'Resposta não encontrada' })
        }

        return res.json(respostas)
    }
}

module.exports = controllerResposta;