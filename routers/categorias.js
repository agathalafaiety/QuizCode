const express = require('express');
const categoriaController = require('../controllers/categoriaController');
const router = express.Router();

router.get('', categoriaController.index);
router.get('/:id', categoriaController.show);

module.exports = router;