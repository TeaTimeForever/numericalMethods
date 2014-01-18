
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
		console.log('')
		old = x
		x = b - (b-a)/(f(b) - f(a))*f(b)
		console.log('\\begin{math}')
		console.log('\tx_{' + i + '}='+ b +' - \\frac{' + b + '-' + a + '}{' + f(b) + '-'+ f(a)+'} \\cdot '+ f(b) +'=' + x  + '\\\\')
		console.log('\tf(a) = '+ f(a) + ', f(x)='+ f(x) + '\\\\')
		console.log('\tf(a) \\cdot f(x) ' + ((f(a) * f(x) <= 0)? '<' : '>') + '0 \\\\')
		
		if(f(a) * f(x) <= 0) {
			b = x
		} else {
			a = x
		}
		console.log('\ta='+ a + ', b='+b +'\\\\')
		console.log('\t|x_{' + i+'} - x_{' +(i-1)+'}| > \\varepsilon \\\\\ ')
		console.log('\\end{math}' )
		i++
	} while (Math.abs(x - old) > e)
	return x
}
