var euler = require('./euler')
//производная
function f(x) {
	return 0.25 * x - 0.05 * Math.pow(x,2)
}

function df(x) {
	return 0.25 * Math.pow(x, 2) - 0.05 * Math.pow(x,3)
}

//шаг
var h = 0.05

//интервал
var a = 0, b = 30

//начальное условие y_0
var y = [1]

function adams(h, a, b, f, y){
	var eulerVal = euler(h,a,b,f,y)
	var k = 0
	y.push(eulerVal[++k])
	y.push(eulerVal[++k])
	y.push(eulerVal[++k])
	for(var i=a+(3*h); i<b; i+=h) {
		var prevY = y[k]
		var prevY1 = y[k-1]
		var prevY2 = y[k-2]
		var prevY3 = y[k-3]
		y.push(prevY + h/24*( 55*f(prevY) - 59*f(prevY1) + 37*f(prevY2) -9*(prevY3)))
		k++
	}
	return y
}

module.exports = adams
