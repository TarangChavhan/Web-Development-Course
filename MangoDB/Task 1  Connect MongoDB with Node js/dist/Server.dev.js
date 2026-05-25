"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var url = "mongodb://127.0.0.1:27017";
var dbName = 'studentDB';
var client = new _mongodb.MongoClient(url);
app.set('view engine', 'ejs');
app.get("/", function _callee(req, resp) {
  var db, collection, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(client.connect());

        case 2:
          db = client.db(dbName);
          collection = db.collection('students');
          _context.next = 6;
          return regeneratorRuntime.awrap(collection.find().toArray());

        case 6:
          result = _context.sent;
          resp.render('home', {
            result: result
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.listen(3200);