var express = require("express");
var app = express();
var server  = require('http').createServer(app);
var router = express.Router();
var path = __dirname + '/views/';
var port = process.env.PORT || 3000;

app.use(express.static('Styles'));
app.use(express.static('Images'));
app.use(express.static('Scripts'));
app.use(express.static('node_modules/bootstrap'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

server.listen(port);