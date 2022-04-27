"use strict";

var mongoose = require('mongoose');

var URI = process.env.DB_URI;
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(function () {
  return console.log('DB is connected');
})["catch"](function (err) {
  return console.log("Error: ".concat(err));
});