
var a = 0.1;
var b = 1;
var e = 0.0001
//var e = 0.0000001
console.log(bisection(a, b, e))

function f(x) {
	// return Math.pow(x, 2)*Math.sin(x) -17;
	return x / (Math.pow(Math.sin(3*x), 2)) - 17// my homework
}

function bisection(a, b, e) {
	
	var i = 1
	do {
		console.log('')
		var x = (a+b)/2
		console.log('\\begin{math}')
		console.log('x_{' + i + '}=(' + a + '+' + b + ')/2=' + x  + '\\\\')
		console.log('a='+a + ', b=' + b + '\\\\' )
		console.log('b-a=' + b + '-' + a + '= ' + (b-a) + '\\\\' )
		console.log('' + (b-a) + ' < \\varepsilon ' + '\\\\' )
		console.log('f(a)=' + f(a) + ', f(x_{' + i + '})= ' + f(x) + '\\\\' )
		console.log('f(a) \\cdot f(x_{'+ i + '}) < 0 \\\\')
		if(f(a) * f(x) <= 0) {
			b = x
		} else {
			a = x
		}
		console.log('a=' + a + ', b=' + b + '\\\\' )
		console.log('\\end{math}' )
		i++
	} while (Math.abs(b - a) > e)
	return x
}
