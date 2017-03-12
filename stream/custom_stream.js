var stream = require('stream')
var util =  require('util')

function ReadStream(){
	stream.Readable.call(this)
}
util.inherits(ReadStream,stream.Readable)

ReadStream.prototype._read = function(){
	this.push('I')
	this.push('2')
	this.push('3')
	this.push(null)
}

function WritStream(){
	stream.Writable.call(this)
}
util.inherits(WritStream,stream.Writable)

WritStream.prototype._write = function(chunk, encoding, cb){
	console.log(chunk.toString())
	cb()
}

function TransformStream(){
	stream.Transform.call(this)
}
util.inherits(TransformStream,stream.Transform)

TransformStream.prototype._transform = function(chunk, encoding, cb){
	this.push(chunk)
	cb()
}

TransformStream.prototype._flush = function(){
	this.push("Ha ha")
}

var rs = new ReadStream()
var ws = new WritStream()
var ts = new TransformStream()

rs.pipe(ts).pipe(ws)