var http = require('http')
var base = 'http://www.imooc.com/learn/'
var url = 'http://www.imooc.com/learn/637'
var cheerio = require('cheerio')

function filter(html){
	var $ =  cheerio.load(html)
	console.log($('strong').text())
}

var crawler = function(url){
	return new Promise(function(resolve,reject){
		http.get(url,function(res){
			var html = ''
			res.on('data',function(data){
				html += data
			})
			res.on('end',function(data){
				resolve(html)
				filter(html)
				//console.log(url)
				//console.log(html)
			})
		}).on('error',function(err){
			reject(err)
			console.log(err)
		})
	})
}

var urlList = [438,197,637]

var arr = []

urlList.forEach(function(id){
	var cc = base + id
	arr.push(crawler(base + id))
		console.log(arr)
})

Promise.all(arr)
	.then(function(){
		console.log('end')
	})

