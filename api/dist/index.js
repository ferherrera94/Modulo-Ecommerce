"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

require("dotenv/config");

require("./db");

var _router = require("./router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* ---Imports---- */

/* ------express initialization------ */
var app = (0, _express["default"])();
/* -----Middlewares----- */

app.use((0, _cors["default"])());
app.use(_express["default"].json());
/* -----Routes----- */

(0, _router.router)(app);
/* -----Listening----- */

var port = process.env.PORT ? process.env.PORT : 8080;
app.listen(app.get('port'), function () {
  console.log("listening on http://localhost:".concat(port));
});