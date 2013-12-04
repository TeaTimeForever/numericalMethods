
var a = 0.1;
var b = 1;
var e = 0.0001;

console.log(simpleIt(a, b, e))

function f(x) {
	return x / (Math.pow(Math.sin(3*x), 2)) - 17// my homework
}

function simpleIt(a, b, e) {
	var x = (a+b)/2
	var next = f(x)
	var i = 0
	
	console.log('it: ' + i + ' x: ' + x + 'next: ' + next)
	i++
	while (Math.abs(next - x) > e) {
		x = next
		next = f(x)
		i++
		console.log('it: ' + i + ' x: ' + x + ' next: ' + next)
	}
	
}
