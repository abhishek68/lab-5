var express = require('express')
var app = express()
app.get('/home/:id',function(req,res){
       res.send(req.params.id)
})
app.get('/home', function (req, res) {
  res.send('hello world')
})
app.listen(3000,function(){
         console.log("hi all")
})