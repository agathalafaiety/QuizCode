const express = require('express')
const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.get('/', (req, res) => res.json({prop : "Olá"}))

module.exports = userRouter;