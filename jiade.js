// var add = function(a){
// 	return function(b){
// 		return function(c){
// 			return a+b+c
// 		}
// 	}
// }


// console.log(add(1)(2)(3)) // 3
// // console.log(add(1, 2, 3)(10)) // 16
// // console.log（add(1)(2)(3)(4)(5)) // 15

// function add(x) {
//     var sum = x;
//     var tmp = function (y) {
//         sum = sum + y;
//         return tmp;
//     };
//     tmp.toString = function () {
//         return sum;
//     };
//     return tmp;
// }

// console.log(add(1)(2)(3)(4)(5)) // 15


var add = function(x){
	var sum = x;
    var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = function () {
        return sum;
    };
    return tmp;
}

console.log(add(1, 2, 3)(10))



var mi = function(fn){
	var args = [].slice.call(arguments,1);
	return function(){
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(null, newArgs);
	}
};

var my = mi(function(){
	var args = [].slice.call(arguments);
	var sum = 0;
	for(var key in args){
		sum += args[key];
	}
	//sum
	var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = function () {
        return sum;
    };
    return tmp;
});

console.log(my(1,2,3)(10))