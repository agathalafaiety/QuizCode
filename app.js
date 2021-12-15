const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');
const configuracoesRouter = require('./routers/configuracoes')
const jogarRouter = require('./routers/jogar')

app.set('views', __dirname, 'views', 'pages');
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

app.use('/', userRouter);
app.use('/configuracoes', configuracoesRouter);
app.use('/jogar', jogarRouter);

//Conexão com o servidor
app.listen(3000, () => {
    console.log('Servidor Rodando')
});