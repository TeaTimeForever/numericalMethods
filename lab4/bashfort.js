var adams = require('./adams')
var euler = require('./euler')
//производная
function f(x) {
	return 0.25 * x - 0.05 * Math.pow(x,2)
}

function df(t) {
	return (0.25  *  Math.pow(Math.E, 0.25 * t ) /( 0.25 + 0.05  * (Math.pow(Math.E,0.25*t) -1)))
}

//шаг
var h = 0.1

//интервал
var a = 0, b = 30

//начальное условие y_0
var y = [1]

function bashfort(h, a, b, f, y){
	var eu = [1]
	var eulerVal = euler(h,a,b,f,eu)
	
	var k = 0
	y.push(eulerVal[++k])
	y.push(eulerVal[++k])
	y.push(eulerVal[++k])
	for(var i=a+(3*h); i<b; i+=h){
		var prevY = y[k]
		var prevY1 = y[k-1] // y_{i-1}
		var prevY2 = y[k-2] // y_{i-2}
		var prevY3 = y[k-3]               
		var curY = prevY + h/24*( 55*f(prevY) - 59*f(prevY1) + 37*f(prevY2) -9*(prevY3)) // y_{i+1}
		curY = prevY + h/24*(9*f(curY) + 19*f(prevY) - 5*f(prevY1) + f(prevY2))
		curY = prevY + h/24*(9*f(curY) + 19*f(prevY) - 5*f(prevY1) + f(prevY2))
		y.push(curY) // y_{i+1} = ...
		k++
	}
}

bashfort(h, a, b, f, y)

var e = [1]
var eulerArr = euler(h, a, b, f, e)
var ad = [1]
var adamsArr = adams(h, a, b, f, ad)
//console.log('x \t euler \t adams \t bashfort \t analytic')
//for(var i=0, j=a; i < y.length; i++, j+=h) {
//	console.log(''+ j + '\t' + eulerArr[i] + '\t' + adamsArr[i]+ '\t' + y[i] + '\t' + df(j))
//}

//console.log('x\t error')
//for(var i=0, j=a; i < y.length; i++, j+=h) {
//	console.log(''+ j + '\t' + Math.abs(eulerArr[i]-df(j)))
//}

//euler vs analytic
//console.log('x \t euler \t analytic \t error')
//for(var i=0, j=a; i < y.length; i++, j+=h) {
//	console.log(''+ j + '\t' + eulerArr[i] +  '\t' + df(j) + + '\t' + Math.abs(eulerArr[i]-df(j)))
//}

console.log('x\t euler error \t bashfort error')
for(var i=0, j=a; i < y.length; i++, j+=h) {
	console.log(''+ j + '\t' + Math.abs(eulerArr[i]-df(j)) +  '\t' + Math.abs(y[i]-df(j)))
}
module.exports = bashfort
