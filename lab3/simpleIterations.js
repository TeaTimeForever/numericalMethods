var a = 0.1;
var b = 1;
var e = 0.0001;

function f(x) {
	return x / (Math.pow(Math.sin(3*x), 2)) - 17 // my homework
}

function df(x) {
	return (1 - 6*x/ Math.tan(3*x)) * (1/Math.pow(Math.sin(3*x), 2)) // my homework
}

function dF(x, k) {
	return 1- k* df(x) 
}

function t(x) {
	return 1 / df(x) // svoditsa k metodu newtona
}

function simpleIt(a, b, e, k) {
	var x = (a+b)/2
	var next =x - f(x)
	console.log('f(x):' + f(x))
	console.log(dF(next, k))
	next =x -  k * f(x)
	console.log('next:' + f(x))
	console.log(dF(next, k))
	var i = 1
	
	while (Math.abs(next - x) > e) {
		x = next
		next =x -  k * f(x) 
		i++
	}
	return next
}



console.log(simpleIt(a,b,e,0.003))
console.log('[')
//for (var i=-1; i<1; i+=0.001) {
//	var x = 0.55
//	x = i * f(x) + x
//	if(Math.abs(dF(x, i)) < 1) console.log(i.toFixed(3) + ', ')
//	
//}
console.log(']')