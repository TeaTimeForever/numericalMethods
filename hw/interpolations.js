// polynoms was calculated for this nodes:
//x|-1|17|6|10
//y| 1|11|8|-2

var p = {
  '-1': 1,
  17: 11,
   6: 8,
  10: -2
}
function lagrangePolynom(x) {
	return (55 * Math.pow(x, 3) - 1266 * Math.pow(x, 2) + 6011*x + 8718)/1386
}

function neutonPolynom(x) {
	return 1 + (5/9) * (x+1) - (4/99) * (x+1)*(x-17) + (5/126)*(x+1)*(x-17)*(x-6)
}

function mnk2(x) {
	return 2.0435446906035106 - 0.21161191749426933 * x + 0.038961038961038905 * Math.pow(x, 2)  
}

function mnk3(x) {
	return 6.290043290043431 + 4.336940836941042 * x + -0.9134199134199545 * Math.pow(x, 2) + 0.03968253968254137 * Math.pow(x, 3) 
}

function mnk4(x) {
	return 5.298582534229462 + 3.6681908369409446 * x - 0.6227858291176097 * Math.pow(x, 2) + 0.008577888519749872 * Math.pow(x, 3) + 0.0009720203488372093 * Math.pow(x, 4) 
}

console.log(['x', 'origin','mnk2', 'mnk3', 'mnk4', 'neutonP', 'lagrangeP'].join('\t'))
for(var i=-1; i < 17; i+=0.1) {
	console.log([i, p[Math.round(i*100)/100] || '*', mnk2(i), mnk3(i), mnk4(i), neutonPolynom(i), lagrangePolynom(i)].join('\t'))
}
