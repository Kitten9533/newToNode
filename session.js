var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
	// console.log(req.cookies);
	// console.log(req.cookies.isVisit);
	// if(req.cookies.isVisit){
	// 	req.cookies.isVisit++;
	// 	res.send('count:' + req.cookies.isVisit);
	// }
	// else{
	// 	req.cookies.isVisit = '1';
	// 	res.send('Welcome');
	// }
	// console.log(req.cookies);
	// res.end();

	req.cookies.hah = 'haha';
	console.log(req.cookies);
	console.log(req.cookies.isVisit);
	if(!!req.cookies.isVisit){
		let count = req.cookies.isVisit * 1.0 + 1;
		res.setHeader('Set-Cookie','isVisit=' + count);
		res.write('<p>' + req.cookies.isVisit + '</p>'); 
	}
	else{
		res.setHeader('Set-Cookie','isVisit=1');
		res.write('Welcome');
	}
	res.end();


	// // 单个
	// res.setHeader('Set-Cookie','c=444');
	// // 多个
	// res.setHeader('Set-Cookie',['a=000','b=333']);
	// res.write('hahha');
	// res.end();
	// console.log('Cookies: ', req.cookies);
})

app.listen(8080);
console.log('start.');
