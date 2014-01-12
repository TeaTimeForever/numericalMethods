var solveTridiagonal = require('../lab1/tridiagonal')
//var p = [
//  {x: 1, y: 2.1},
//  {x: 2.3, y: 4.9},
//  {x: 6.7, y: 3.4},
//  {x: 8, y: 2.4}
//]

//var p = [
//  {x: 0, y: 2.1},
//  {x: 2, y: 4.9},
//  {x: 4, y: 3.4},
//  {x: 5, y: 2.4}
//]
var p = [
     {x: -3.2, 	y: 10}, 
     {x: -2.1, 	y: -2}, 
     {x: 0.4 , 	y: 0 },
     {x: 0.7,  	y: -7},
     {x: 2,    	y: 7},
     {x: 2.5,  	y: 0},
     {x: 2.777, y: 0}
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
for(var i=1; i<p.length-1; i++) {
	var eq = []
	for(var j = 0; j<p.length-2; j++) { eq.push(0) }
	if(i == 1) {
		eq[i-1] = 2 * (splines[i-1].h + splines[i].h)
		eq[i]   = splines[i].h
	} else if(i == p.length-2){
		eq[i-2] = splines[i-1].h
		eq[i-1]   = 2 * (splines[i-1].h + splines[i].h)
	} else {
		eq[i-2] = splines[i-1].h
		eq[i-1]   = 2 * (splines[i-1].h + splines[i].h)
		eq[i] = splines[i].h
	}
	mA.push(eq)
	mB.push([3 * ((p[i+1].y - p[i].y)/splines[i].h - (p[i].y - p[i-1].y)/splines[i-1].h)])
}

//console.log('mA')
//for(var i=0; i< mA.length; i++) {
//	console.log("mA" + i + " " + mA[i])
//}
//console.log('mB')
//for(var i=0; i< mB.length; i++) {
//	console.log("mB" + i + " " + mB[i])
//}


//fill c
var c = solveTridiagonal(mA, mB);
splines[0].c = 0
for(var i=0; i < c.length; i++){
	splines[i+1].c = c[i]
}
splines.push({c: 0})

//fill d
for(var i=0; i<p.length-1; i++){
	if(i == p.length -2) {
		splines[i].d = -splines[i].c /3*splines[i].h
	} else {
		splines[i].d = (splines[i+1].c - splines[i].c) / (3 * splines[i].h)
	}
}

//fill b
for(var i=0; i<p.length-1; i++){
    splines[i].b = ((p[i+1].y - splines[i].a - splines[i].c * Math.pow(splines[i].h, 2) - splines[i].d * Math.pow(splines[i].h, 3) )/ splines[i].h)  	
}

function defineSIndex(x){
  for(var i=1; i < p.length; i++) {
    if(x < p[i].x) return i-1
  }
  return splines.length-1
}

function interpolate(x){
  var sI = defineSIndex(x)
  var delta = x - p[sI].x
//  console.log(p[sI].x)
  return (splines[sI].a
         + splines[sI].b * (delta)
         + (splines[sI].c * (Math.pow(delta, 2)))
         + (splines[sI].d * (Math.pow(delta, 3))));
}

for(var i=-3.2; i <= 2.7; i+=0.1) {
//	interpolate(i)
	console.log(interpolate(i))
//	console.log(i)
}
//
//splines.pop()
//console.log(splines)