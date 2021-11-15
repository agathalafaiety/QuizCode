const express = require('express')
const userRouter = require('./routes/userRouter')
const app = express();

app.set('views', __dirname, 'views', 'pages');
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.render('login')
})

app.get('/cadastro', (req, res) => {
    return res.render('cadastro')
})

app.get('/inicio', (req, res) => {
    return res.render('inicio')
})

app.get('/config', (req, res) => {
    return res.render('config')
})

app.get('/quizcode', (req, res) => {
    return res.render('quizcodes')
})

app.get('/ranking', (req, res) => {
    return res.render('ranking')
})

app.get('/sala', (req, res) => {
    return res.render('sala')
})

app.use('/', userRouter);

//Conexão com o servidor
app.listen(3000, () => {
    console.log('Servidor Rodando')
});