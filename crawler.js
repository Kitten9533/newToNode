var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'

function filter(html){
	var $ = cheerio.load(html)
	var strong = []
	//strong.push($('strong').text())
	console.log($('strong').text())
}

http.get(url,function(res){
	var html = ''

	res.on('data',function(data){
		html += data
	})
	res.on('end',function(){
		filter(html)
	})
}).on('error',function(){
	console.log('error');
})