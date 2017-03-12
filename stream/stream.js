var fs = require('fs')

var readstream = fs.createReadStream('logo.png')
var writestream = fs.createWriteStream('write_logo.png')

// readstream.on('data',function(data){
// 	if(writestream.write(data)==false){
// 		readstream.pause()
// 	}
// })
// readstream.on('end',function(){
// 	writestream.end()
// })
// writestream.on('darin',function(){
// 	console.log('copying...')
// 	readstream.resume()
// })

readstream.pipe(writestream)