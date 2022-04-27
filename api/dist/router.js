"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = router;

var _ecommerce = _interopRequireDefault(require("./routes/ecommerce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function router(app) {
  app.use(_ecommerce["default"]);
}