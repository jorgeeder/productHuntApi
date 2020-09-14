const express = require('express');
const mongoose = require('mongoose');

//Iniciando o App
const app = express() ;

//Iniciando o DB
mongoose.connect('mongodb://localhost:21017/nodeapi', {useNewUrlParser:true , useUnifiedTopology: true});

// Primeira rota
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(3001);