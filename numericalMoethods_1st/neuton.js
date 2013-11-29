function neuton(a, b, e) {
	var i = 0;
	var x 
	var xNew
	console.log('i: '+i);
	x = (a+b)/2
	do {
		xNew = ( x - ( f(x) / fD(x)));
		i++;
		console.log('--------');
		console.log('i: '+i);
		console.log('xNew: '+xNew);
		var delta = Math.abs(x - xNew)
		console.log('delta: ' + delta)
		x = xNew
	} while(delta > e);
	return x;
}

var a = 5.5;
var b = 7;
var e = 0.0001;
neuton(a, b, e);
