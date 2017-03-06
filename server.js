var http=require('http')
var server =  http.createServer(function(req,res){
	res.writeHead('200')
	res.end("hahahahaha\n")

})
server.listen(1333,'127.0.0.1')
console.log("hahhaha")