// npm install express nodemon mongoose 

const express = require('express');
const checkListsRouter = require('./src/routes/checklist');
const app = express();
require('./config/database')

app.use(express.json());

app.use('/checklists', checkListsRouter);

app.listen(3000, () => {
    console.log('Servidor foi iniciado')
});