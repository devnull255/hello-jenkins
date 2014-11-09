//had to create a synlink called node to point to nodejs
var express = require('express');

var app = express();

app.get('/',function (req,res) {
  res.send('hello, this is a sample app from node');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
