const express = require('express');
const controllerCategoria = require('../controllers/controllerCategoria');
const router = express.Router();

router.get('', controllerCategoria.index);
router.get('/:id', controllerCategoria.show);

module.exports = router;