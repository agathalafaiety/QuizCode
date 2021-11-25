const express = require('express');
const userRouter = require('./routes/userRouter');
const configuracoesRouter = require('./routes/configuracoes')
const jogarRouter = require('./routes/jogar')
const app = express();

app.set('views', __dirname, 'views', 'pages');
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.render('./views/pages/login')
})

app.get('/cadastro', (req, res) => {
    return res.render('./views/pages/cadastro')
})

app.get('/inicio', (req, res) => {
    return res.render('./views/pages/inicio')
})

app.get('/criarSala', (req, res) => {
    res.render('./views/pages/criarSala')
})

app.get('/rankingGeral', (req, res) => {
    res.render('./views/pages/rankingGeral')
})

app.get('/loja', (req, res) => {
    res.render('./views/pages/loja')
})

app.use('/', userRouter);
app.use('/configuracoes', configuracoesRouter);
app.use('/jogar', jogarRouter);

//Conexão com o servidor
app.listen(3000, () => {
    console.log('Servidor Rodando')
});