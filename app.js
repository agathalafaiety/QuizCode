const express = require('express');
const app = express();
const rotasUsuarios = require('./routers/rotasUsuarios');
const rotasConfiguracoes = require('./routers/rotasConfiguracoes')
const rotasJogar = require('./routers/rotasJogar')
const rotasCategorias = require('./routers/rotasCategorias')

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.render('pages/login')
})

app.get('/cadastro', (req, res) => {
    return res.render('pages/cadastro')
})

app.get('/inicio', (req, res) => {
    return res.render('pages/inicio')
})

app.get('/criarSala', (req, res) => {
    res.render('pages/criarSala')
})

app.get('/rankingGeral', (req, res) => {
    res.render('pages/rankingGeral')
})

app.get('/loja', (req, res) => {
    res.render('pages/loja')
})

app.use('/', rotasUsuarios);
app.use('/configuracoes', rotasConfiguracoes);
app.use('/jogar', rotasJogar);
app.use('/categorias', rotasCategorias);

//Conexão com o servidor
app.listen(3000, () => {
    console.log('Servidor Rodando')
});