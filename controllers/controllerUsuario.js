const { Usuario } = require('../models');

const controllerUsuario = {
    index: async (req, res) => {
        const usuarios = await Usuario.findAll();
        return res.json(usuarios)
    },

    show: async (req, res) => {
        const id = req.params.id;
        const usuarios = await Usuario.findOne({ where: { id } });

        if (usuarios == null) {
            return res.status(404).json({ mensagem: 'Usuario não encontrada' })
        }

        return res.json(usuarios)
    }
}

module.exports = controllerUsuario;