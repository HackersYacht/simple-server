var express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send("Happy Hacking at HackersYacht");//

})

app.listen(3000);//it's going to be running on this port
