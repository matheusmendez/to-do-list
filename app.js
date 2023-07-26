// npm install express nodemon mongoose ejs --save

const express = require('express');
const path = require('path');

const checkListsRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');


require('./config/database') // configuração do banco de dados

const app = express();
app.use(express.json()); // middlewere para tratar json das requisições

app.use(express.static(path.join(__dirname, 'public'))); // middlewere apontar arquivos estaticos

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter); // middlewere para as rotas baseadas em /index
app.use('/checklists', checkListsRouter); // middlewere para as rotas baseadas em /checklist

app.listen(3000, () => {
    console.log('Servidor foi iniciado')
});