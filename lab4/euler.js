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

function euler(h, a, b, f, y){
	for(var i=a; i<b; i+=h){
		var prevY = y[y.length-1]
		y.push(prevY + h * f(prevY))
	}
	return y
}

//y = euler(h, a, b, f, y)
//for(var i=0; i<y.length-1; i++) {
//	console.log(y[i])
//}
module.exports = euler