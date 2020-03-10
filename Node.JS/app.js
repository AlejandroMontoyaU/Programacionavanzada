import express from 'express';

// let express = require('express');
let app = express();

app.get('/test', function (req, res) {
  res.send('Hello World!');
});

app.get('/test/home', function (req, res) {

    let nombre = "Alejandro";
    let apellido = "Montoya";
    
    res.send(`Su nombre es: ${nombre} ${apellido}`);
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});