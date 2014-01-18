function neuton(firstx, a, b, e) {
	var i = 0;
	var x = (a+b)/2
	//var x = firstx
	var xNew
	var a = 1
	do {
		xNew = ( x - a* (f(x) / fD(x)));
		i++;
		var delta = Math.abs(x - xNew)
		x = xNew
	} while(delta > e);
	if(xNew < 1 && xNew > 0)
		console.log('f: ' + firstx + ' -> ' + xNew)
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


console.log(f(0.4)/fD(0.4))
//for(var i=a; i< b; i+=0.001){
//	neuton(0.75, a, 0.699, e);
//}

//ab(0.001, a, b)
function ab (step, a, b){
	while (a < b) {
		console.log('a: ' + a + ' b: ' + b + ' -> ' + (a+b)/2)
		b-=step
	}
}

//first - 0.75
// f: 0.215
// f: 0.40000000000000024