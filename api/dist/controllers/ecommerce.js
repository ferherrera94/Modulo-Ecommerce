"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ecommerce = void 0;
var ecommerce = {
  reserve: function reserve(req, res) {
    var _req$body = req.body,
        proccess = _req$body.proccess,
        proccessStep = _req$body.proccessStep,
        label = _req$body.label,
        data = _req$body.data;
    res.send('Aqui va la funcion de reserva');
  },
  payments: function payments(req, res) {
    res.send('Aqui va la funcion de pagos');
  }
};
exports.ecommerce = ecommerce;