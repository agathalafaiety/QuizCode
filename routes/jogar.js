const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./views/pages/sala')
})

router.get('/quizcode', (req, res) => {
    return res.render('./views/pages/quizcode')
})

router.get('/ranking', (req, res) => {
    return res.render('./views/pages/ranking')
})

module.exports = router;