function neuton( a, b, e) {
	var i = 0;
	var x = (a+b)/2
	var xNew
	var a = 1
	do {
		
		console.log('')
		console.log('\\item')
		console.log('\\begin{math}')
		console.log('\tx_{' + i + '} = ' + x.toFixed(4) + '\\\\')
		xNew = ( x - a* (f(x) / fD(x)));
		i++;
		console.log('\tx_{' + i + '} = x_{' + (i-1) + '} - \\frac{' + f(x).toFixed(4) + '}{'+fD(x).toFixed(4) +'} = '+ xNew.toFixed(4) + '\\\\')
		console.log('\t|' + xNew.toFixed(4) + ' -' + x.toFixed(4) + '| > \\varepsilon\\\\' )
		console.log('\\end{math}' )
		var delta = Math.abs(x - xNew)
		x = xNew
	} while(delta > e);
	return xNew;
}

function f(x) {
	return x / (Math.pow(Math.sin(3*x), 2)) - 17 // my homework
}

function fD(x) {
	return (1 - 6*x/ Math.tan(3*x)) * (1/Math.pow(Math.sin(3*x), 2)) // my homework
}
var a = 0.1;
var b = 1;
var e = 0.0001

neuton( a, b, e);

//ab(0.001, a, b)
function ab (step, a, b){
	while (a < b) {
		console.log('a: ' + a + ' b: ' + b + ' -> ' + (a+b)/2)
		b-=step
	}
}
