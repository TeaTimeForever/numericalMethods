var solveTridiagonal = require('./tridiagonal')
var p = [
  {x: 0, y: 2},
  {x: 1, y: 5},
  {x: 2, y: 3},
  {x: 3, y: 4}
]

var splines = []

//fill a
for (var i=0; i < p.length-1; i++) {
	splines[i] = {}
	splines[i].a = p[i].y
}

//fill h
for(var i=0; i < p.length-1;i++){
	splines[i].h = p[i+1].x - p[i].x
}

//fill matrix A and B ??
var mA = []
var mB = []
for(var i=1; i < p.length - 1; i++) {
	var eq = []
	if(i == 1) {
		eq.push(2 * (splines[i-1].h + splines[i].h))
		eq.push(splines[i].h)
	} else if(i == p.length - 2){
		eq.push(splines[i-1].h)
		eq.push(2 * (splines[i-1].h + splines[i].h))
	} else {
		eq.push[splines[i-1].h]
		eq.push(2 * (splines[i-1].h + splines[i].h))
		eq.push(splines[i].h)
	}
	mA.push(eq)
	mB.push([3 * ((p[i+1].y - p[i].y)/splines[i].h - (p[i].y - p[i-1].y)/splines[i-1].h)])
}
console.log("mA:" + mA)
console.log("mB:" + mB)

//fill c
var c = solveTridiagonal(mA, mB);
splines[0].c = 0
console.log(c)
for(var i=0; i < c.length; i++){
	splines[i+1].c = c[i]
}
splines.push({c: 0})

//fill d
for(var i=0; i<p.length-1; i++){
	console.log(i)
	splines[i].d = (splines[i+1].c - splines[i].c) / 3 * splines[i].h 
}

//fill b
for(var i=0; i<p.length-1; i++){
	splines[i].b = (p[i+1].y - p[i].y) / splines[i].h - splines[i].h/3 * (splines[i+1].c + 2*splines[i].c)	
}

function defineSIndex(x){
  for(var i=1; i < p.length; i++){
    if(x < p[i].x) return i-1
  }
  return i-1;
}

function interpolate(x){
  var sI = defineSIndex(x)
  var delta = x - p[sI].x
  return (splines[sI].a
         + splines[sI].b * (delta) 
         + (splines[sI].c * (Math.pow(delta, 2)))
         + (splines[sI].d * (Math.pow(delta, 3)))); 
}


for(var i=2; i <= 3; i+=0.1) {
	console.log("i: " + i + " = " + interpolate(i))
}

splines.pop()
console.log(splines)
