var a = 0.1;
var b = 1;
var e = 0.0001;

function f(x) {
	return x / (Math.pow(Math.sin(3*x), 2)) - 17 // my homework
}

function df(x) {
	return (1 - 6*x/ Math.tan(3*x)) * (1/Math.pow(Math.sin(3*x), 2)) // my homework
}

function dF(x) {
	return df(x) + 1
}

function t(x) {
	return 1 / df(x) // svoditsa k metodu newtona
}

function simpleIt(a, b, e, k) {
	var x = (a+b)/2
//	var k = 0.05
	var next = x - k * f(x) 
	var i = 1
	
	console.log('x: ' + next + ' ->  ' + dF(next))
	
	while (Math.abs(next - x) > e) {
		x = next
		next = x - k * f(x)
		i++
		//console.log('x: ' + next + ' ->  ' + dF(next))
	}
	return next
}
var ks = [
-0.056, 
-0.057, 
-0.058, 
-0.059, 
-0.122, 
-0.123, 
-0.124, 
-0.187, 
-0.188, 
-0.251, 
-0.252, 
-0.316, 
-0.379, 
-0.443, 
-0.507, 
-0.571, 
-0.698, 
-0.762, 
-0.953, 
]

for(var i=0; i<ks.length; i++) {
	console.log(' ')
	console.log(simpleIt(a, b, e, ks[i]))
}
//console.log(simpleIt(a, b, e))
//for (var i=0; i>-1; i-=0.001) {
//	var x = 0.55
//	x = i * f(x) + x
//	
//	if(Math.abs(dF(x)) < 1) console.log(i + ', ')
//	
//}
