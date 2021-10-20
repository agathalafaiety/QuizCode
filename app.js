const express = require('express')
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    return res.render('inicio')
})

app.listen(3000, () => {
    console.log('Servidor Rodando')
});