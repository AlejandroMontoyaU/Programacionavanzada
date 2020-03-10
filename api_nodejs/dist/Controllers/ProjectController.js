"use strict";

var controller = {
    home: function home(req, res) {
        return res.send({
            message: "Hola soy la home"
        });
    },
    cesde: function cesde(req, res) {
        return res.send({
            message: "Hola soy cesde"
        });
    },
    data: function data(req, res) {
        return res.send({
            message: "HOla soy data"
        });
    },
    alumnos: function alumnos(req, res) {
        return res.json(req.body.nombre);
    },
    docentes: function docentes(req, res) {
        if (req.body.name.length < 10 && !isNaN(req.body.cedula) && !isNaN(req.body.age)) {
            return res.json(req.body + { message: "Cedula" });
        } else {
            return res.send({
                message: "tiene mas de 10 caracteres"
            });
        }
    }

};

module.exports = controller;