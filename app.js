var express=require('express')
var moment=require('moment')

var app=express()

app.use(express.static(__dirname + '/public'));


var log=function(message){
    var time=moment().format()
    console.log('[server] @'+time+' '+message)
}

var adder=function(num1,num2){
    var result = num1+num2;
    return result
}

app.get('/adder',function(req,res){
log('adder request made')
var num1=parseInt(req.query.num1);
var num2=parseInt(req.query.num1);
var result=adder(num1,num2)
res.send(''+result+'')
})
var port=3000;
app.listen(port)
log('server listening on: '+port)


