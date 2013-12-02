
var a = 0.1;
var b = 1;
var e = 0.0001;

console.log(chord(a, b, e))

function f(x) {
	return x / (Math.pow(Math.sin(3*x), 2)) - 17
}

function chord(a, b, e) {
	var i = 1
	var old = b
	var x = -6
	do {
		old = x
		x = b - (b-a)/(f(b) - f(a))*f(b)
		console.log('it: ' + i)
		console.log('x: ' + x + ', ab = [' + a + ', ' + b + ']')
		if(f(a) * f(x) <= 0) {
			b = x
		} else {
			a = x
		}
		
		i++
	} while (Math.abs(x - old) > e)
	return x
}
