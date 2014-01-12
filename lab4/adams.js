var euler = require('./euler')
//производная
function f(x) {
	return 0.25 * x - 0.05 * Math.pow(x,2)
}

function df(x) {
	return 0.25 * Math.pow(x, 2) - 0.05 * Math.pow(x,3)
}

//шаг
var h = 0.1

//интервал
var a = 0, b = 30

//начальное условие y_0
var y = [1]

function adams(h, a, b, f, y){
	var eulerVal = euler(h,a,b,f,y)
	console.log(y)
	var k = 0
	for(var i=a; i<b; i+=h){
		var prevY = eulerVal[k]
		var prevY1 = (k-1 >= 0)? eulerVal[k-1] : 0
		var prevY2 = (k-2 >= 0)? eulerVal[k-2] : 0
		var prevY3 = (k-3 >= 0)? eulerVal[k-3] : 0
		y.push(prevY + h/24*( 55*f(prevY) - 59*f(prevY1) + 37*f(prevY2) -9*(prevY3)))
		k++
	}
	return y
}

y = adams(h, a, b, f, y)
//for(var i=0; i < y.length-1; i++) {
//	console.log(y[i])
//}
module.exports = adams
