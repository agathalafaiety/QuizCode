const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/sala')
})

router.get('/quizcode', (req, res) => {
    return res.render('pages/quizcode')
})

router.get('/ranking', (req, res) => {
    return res.render('pages/ranking')
})

module.exports = router;