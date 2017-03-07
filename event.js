var events = require('events')
var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection',function(){
	console.log('connection handler')
	eventEmitter.emit('receive')
})

eventEmitter.addListener('receive',function(){
	console.log('receive')
})

eventEmitter.emit('connection')

var n = eventEmitter.listenerCount('connection')

console.log(n)

console.log('end')