var adams = require('./adams')
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

function bashfort(h, a, b, f, y){
	y = adams(h,a,b,f,y)
	var ay = [y[0]]
	var k = 0
	for(var i=a; i<b; i+=h){
		var prevY = y[k]
		var prevY1 = (k-1 >= 0)? y[k-1] : 0  // y_{i-1}
		var prevY2 = (k-2 >= 0)? y[k-2] : 0  // y_{i-2}
		var curY = (k != y.length-1)? y[k+1] : 0	// y_{i+1}	
		
		ay.push(prevY + h/24*(19*f(curY) + 9*f(prevY) - 5*f(prevY1) + f(prevY2))) // y_{i+1} = ...
		k++
	}
	return ay
}

y = bashfort(h, a, b, f, y)
for(var i=0; i < y.length-1; i++) {
	console.log(y[i])
}
module.exports = bashfort
