"use strict";

var http = require("http");

http.createServer(function (req, res) {
  res.write("<h1> Hello I am Creating Server Here...</h1>");
  res.write("<ol> <li>I need Your Permission</li>  <li>That is for our company Growth</li></ol>");
  res.end("Thank You for your kindness");
}).listen(5000);