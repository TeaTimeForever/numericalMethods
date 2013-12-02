function neuton(a, b, e) {
	var i = 0;
	var x = (a+b)/2 
	var xNew
	console.log('x: ' + x )
	do {
		xNew = ( x - (f(x) / fD(x)));
		i++;
		var delta = Math.abs(x - xNew)

		console.log('it: ' + i)
		console.log('xNew: ' + xNew +'  delta: ' + delta)
		x = xNew
	} while(delta > e);
	return x;
}

function f(x) {
	// return Math.pow(x, 2)*Math.sin(x) -17;
	return x / (Math.pow(Math.sin(3*x), 2)) - 17 // my homework
}

function fD(x) {
	// return x*(2*Math.sin(x) + x*Math.cos(x));
	return (1 - 6*x/ Math.tan(3*x)) * (1/Math.pow(Math.sin(3*x), 2)) // my homework
}
var a = 0.1;
var b = 1;
var e = 0.0001;
neuton(a, b, e);
