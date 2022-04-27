"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ecommerce = require("../controllers/ecommerce");

var router = (0, _express.Router)();
router.get('/api/1.0/initialreserve', _ecommerce.ecommerce.reserve);
router.get('/api/1.0/payments', _ecommerce.ecommerce.payments);
var _default = router;
exports["default"] = _default;