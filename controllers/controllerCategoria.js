const { Categoria } = require('../models');

const controllerCategoria = {
    index: async (req, res) => {
        const categorias = await Categoria.findAll();
        return res.json(categorias)
    },

    show: async (req, res) => {
        const id = req.params.id;
        const categorias = await Categoria.findOne({ where: { id } });

        if (categorias == null) {
            return res.status(404).json({ mensagem: 'Categoria não encontrada' })
        }

        return res.json(categorias)
    }
}

module.exports = controllerCategoria;