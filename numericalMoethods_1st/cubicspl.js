var solveTridiagonal = require('./tridiagonal')
var p = [
  {x: 0,   y: 2.1},
  {x: 3.3, y: 5.9},
  {x: 6.6, y: 2.4},
  {x: 9.9, y: 3.4}
]
var n = p.length //dif

var splines = []
for(var i=0; i<n; i++) {
	splines[i] = {}
	splines[i].x = p[i].x
	splines[i].a = p[i].y
}
splines[0].c = 0
splines[n-1].c = 0

//slau
var alpha = []
var beta = []
alpha[0] = 0
beta[0] = 0
for(var i=1; i< n-1; i++) {
	var hi = p[i].x - p[i-1].x
	var hi1 = p[i + 1].x - p[i].x
	var a = hi;
	var c = 2 * (hi + hi1)
	var b = hi1
	var f = 6 * ((p[i + 1].y - p[i].y) / hi1 - (p[i].y - p[i - 1].y) / hi)
	var z = (a * alpha[i - 1] + c)
	alpha[i] = (-b)/z
	beta[i] = (f - a * beta[i - 1]) / z
}

for(var i=n-2; i>0; i--) { // dif
	splines[i].c = alpha[i] * splines[i + 1].c + beta[i]
}

for(var i=n-1; i>0; i--) {
	var hi = p[i].x - p[i-1].x
	splines[i].d = (splines[i].c - splines[i - 1].c) / hi
	splines[i].b = hi * (2.0 * splines[i].c + splines[i - 1].c) / 6.0 + (p[i].y - p[i - 1].y) / hi
}
console.log(splines)


var x = 3.3
var spline = splines[defineSIndex(x)]
var dx = x - spline.x
var res = spline.a + (spline.b + (spline.c /2 + spline.d * dx / 6) * dx) * dx
console.log(res)
function defineSIndex(x){
  for(var i=1; i < p.length; i++){
    if(x < p[i].x) return i-1
  } 
  return i-1;
}