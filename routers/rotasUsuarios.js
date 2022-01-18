const express = require('express')
const controllerUsuario = require('../controllers/controllerUsuario')
const rotasUsuarios = express.Router()

rotasUsuarios.get('/', (req, res) => res.json({ prop: "Olá" }))

module.exports = rotasUsuarios;