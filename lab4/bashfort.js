var adams = require('./adams')
var euler = require('./euler')
//производная
function f(x) {
	return 0.25 * x - 0.05 * Math.pow(x,2)
}

function df(t) {
	return (0.25 * y[0] *  Math.pow(Math.E, 0.25 * t ) /( 0.25 + 0.05 * y[0] * (Math.pow(Math.E,0.25*t) -1)))
}

//шаг
var h = 0.1

//интервал
var a = 0, b = 30

//начальное условие y_0
var y = [1]

//function bashfort(h, a, b, f, y){
//	var adamsVal = adams(h,a,b,f,y)
//	var eulerVal = euler(h,a,b,f,y)
//	
//	var k = 0
//	for(var i=a; i<b; i+=h){
////		var prevY = eulerVal[k-1]
////		var prevY1 = eulerVal[k-2] // y_{i-1}
////		var prevY2 = eulerVal[k-3] // y_{i-2}
////		var curY = adamsVal[k] // y_{i+1}
//		
//		//console.log(eulerVal[k-1],  eulerVal[k-2], eulerVal[k-3], adamsVal[k] // y_{i+1})
//		
////		y.push(prevY + h/24*(19*f(curY) + 9*f(prevY) - 5*f(prevY1) + f(prevY2))) // y_{i+1} = ...
//		k++
//	}
//}

function bashfort(h, a, b, f){
	var adamsVal = adams(h,a,b,f,y)
	var eulerVal = euler(h,a,b,f,y)
	var k = 4
	for(var i=a; i<b; i+=h) {
		var prevY = eulerVal[k-1]
		var prevY1 = eulerVal[k-2]
		var prevY2 = eulerVal[k-3]
		var curY = adamsVal[k]
		console.log("eul " + (k-1) + ": " + eulerVal[k-1])
		console.log("eul " + (k-2) + ": " + eulerVal[k-2])
		console.log("eul " + (k-3) + ": " + eulerVal[k-3])
		console.log("adams " + k + ": " + adamsVal[k])
		k++
	}
	
}

bashfort(h, a, b, f, y)
//for(var i=0; i < y.length-1; i++) {
//	console.log(y[i])
//}

//for(var i=a; i<b; i+=h ){
//	console.log(df(i))
//}

module.exports = bashfort
