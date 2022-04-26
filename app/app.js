
var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';
const PORT = 8080;
const HOST = '0.0.0.0';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/sobre",function(req,res){
  res.sendFile(path + "sobre.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(8080, function () {
  console.log('Runserver list port 8080!')
})
