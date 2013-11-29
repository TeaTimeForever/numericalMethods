
var a = 5.5;
var b = 7;
var e = 0.0001;
function f(x) {
	//return x/Math.pow(Math.sin(3*x), 2);
	return Math.pow(x, 2)*Math.sin(x) -17;
}

function fD(x) {
	return x*(2*Math.sin(x) + x*Math.cos(x));
}


console.log(bisection(a, b, e))

function bisection(a, b, e) {
	do {
		var x = (a+b)/2
		if(f(a) * f(x) <= 0) {
			b = x
		} else {
			a = x
		}
	} while (Math.abs(b - a) > e)
	return x
}
