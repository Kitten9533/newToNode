var fs = require('fs')

fs.readFile('logo.png',function(err,data){
	console.log(data)
	fs.writeFile('logn_buffer.png',data,function(err){
		if(err){console.log(err)}
			var base64Buffer = data.toString('base64')
			// var buffer = base64Buffer.de
			console.log(base64Buffer)
	})
})

