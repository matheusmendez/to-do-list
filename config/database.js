const mongoose = require('mongoose'); // Adaptador do MongoDB
mongoose.Promise = global.Promise; // Utilizando no MongoDB a Promise do Express

// string de conexão
mongoose.connect('mongodb://127.0.0.1:27017/to-do-list', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log(err));


