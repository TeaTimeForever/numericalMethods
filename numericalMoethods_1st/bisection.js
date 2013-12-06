
var a = 0.1;
var b = 1;
//var e = 0.0001
//var e = 0.0000001
var e = 0.0000000001
console.log(bisection(a, b, e))

function f(x) {
	// return Math.pow(x, 2)*Math.sin(x) -17;
	return x / (Math.pow(Math.sin(3*x), 2)) - 17// my homework
}

function bisection(a, b, e) {
	var i = 1
	do {
		var x = (a+b)/2
		console.log('it: ' + i)
		console.log('x: ' + x + ', ab = [' + a + ', ' + b + ']')
		if(f(a) * f(x) <= 0) {
			b = x
		} else {
			a = x
		}
		i++
	} while (Math.abs(b - a) > e)
	return x
}
