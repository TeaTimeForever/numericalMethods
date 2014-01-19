var a = 2
var b = 3
var e = 0.0001

function f(x) {
	return x * (Math.pow(Math.E, 0.8*x)) -17
}

function df(x) {
	return Math.pow(Math.E, 0.8*x) * (0.8 * x + 1)
}

function dF(x, k) {
	return 1- k* df(x) 
}

function t(x) {
	return 1 / df(x) // svoditsa k metodu newtona
}

function simpleIt(a, b, e, k) {
	var x = (a+b)/2
	var next = x -  k * f(x)
	console.log('k: ' + k + ' -> ' + dF(next, k))
	var i = 1
	
	while (Math.abs(next - x) > e) {
		console.log(' ')
		console.log('iteration: ' + i)
		x = next
		console.log('x = ' + x)
		next = x -  k * f(x) 
		console.log('next x  = ' + x.toFixed(5) + ' - ' + k + ' * ' + f(x).toFixed(5) + ' = ' + next.toFixed(5))
		i++
	}
	return next
}

console.log(simpleIt(a,b,e,0.001))
