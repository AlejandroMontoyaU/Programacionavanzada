'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let express = require('express');
var app = (0, _express2.default)();

app.get('/test', function (req, res) {
  res.send('Hello World!');
});

app.get('/test/home', function (req, res) {

  var nombre = "Alejandro";
  var apellido = "Montoya";

  res.send('Su nombre es: ' + nombre + ' ' + apellido);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});