const express = require('express')
const userRouter = require('./routes/userRouter')
const app = express();

app.set('views', __dirname, 'views', 'pages');
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', userRouter);

//Conexão com o servidor
app.listen(3000, () => {
    console.log('Servidor Rodando')
});