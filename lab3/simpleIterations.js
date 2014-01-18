
var a = 0.1;
var b = 1;
var e = 0.0001;

//console.log(simpleIt(a, b, e))

function f(x) {
	return x / (Math.pow(Math.sin(3*x), 2)) - 17 // my homework
}

function df(x) {
	return (1 - 6*x*Math.cos(3*x)) / (Math.sin(3*x)) * 1 / Math.pow(Math.sin(3*x),2)
}

function t(x) {
	return 1 / df(x) // svoditsa k metodu newtona
}

function simpleIt(a, b, e) {
	var x = (a+b)/2
	var next = t(x) * f(x) + x
	var i = 1
	console.log('x: '+ x)
	console.log('next: ' + next)
	console.log('')
	while (Math.abs(next - x) > e) {
		x = next
		next = t(x) * f(x) + x
		i++
		console.log(' x: ' + x )
		console.log( ' next: ' + next)
		console.log('')
	}
}

console.log('min: ' + df(a))
console.log('max: ' + df(b))