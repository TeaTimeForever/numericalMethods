var solveTridiagonal = require('./tridiagonal')
var p = [
  {x: 0,   y: 2.1},
  {x: 3.3, y: 5.9},
  {x: 6.6, y: 2.4},
  {x: 9.9, y: 3.4}
]
var n = p.length -1
var abcd = []
var h = fillDeltaXValues()

var matrix = fillMatrixes()
fillA()
fillC(matrix.A, matrix.B)
fillD()
fillB()

var x = 6.6
var sIndex = defineSIndex(x)
console.log('interpolation: ' + interpolate(sIndex, x))


function fillDeltaXValues(){
  var res = []
  for(var i=0; i < n; i++){
    res[i] = p[i+1].x - p[i].x
  }
  return res
}

function fillMatrixes(){
	var aM = []
	var bM = []
	p.push({x: 0, y:0})
	
	for (var i = 1; i < n; i++) {
		
		var eq = []
		for(var j = 0; j < n-1; j++) { eq.push(0) }
		aM.push(eq)
		
		if (i - 2 > 2) { aM[i-1][i-2] = h[i-1] }
		
		aM[i-1][i-1] = (h[i-1] + h[i]) * 2
		
		if (i + 1 < n) {aM[i-1][i] = h[i]}
		
		bM[i-1] = (3 
				* ((p[i+1].y - p[i].y)
				/ h[i] - (p[i].y - p[i-1].y) 
				/ h[i-1])) 
	}
	p.pop()
	return {A: aM, B: bM}
}
//
//function fillA(){
//  for(var i=0; i < n; i++){
//    abcd[i] = []
//    abcd[i][0] = p[i].y
//  }
//}
function fillA(){
  abcd[0] = []	
  abcd[0][0] = 0
  for(var i = 1; i < p.length; i++){
	abcd[i] = []
    abcd[i][0] = p[i].y
  }
}

function fillB(){
  for(var i = 0; i < n-1; i++){
    abcd[i][1] = (p[i+1].y - p[i].y - abcd[i][2] * h[i] * h[i] - ((abcd[i+1][2] - abcd[i][2]) / 3 )* h[i] * h[i]) / h[i]; 
  }
  abcd[n-1][1] = (p[n].y - p[n-1].y - abcd[n-1][2] * h[n-1] * h[n-1] - abcd[n-1][3] * h[n-1] * h[n-1] * h[n-1] ) / h[n-1]
}

function fillC(mA, mB){
  var c = solveTridiagonal(mA, mB)
  abcd[0][2] = 0
  for(var i = 1; i < c.length; i++) {
    abcd[i][2] = c[i-1]
  }
  abcd[c.length][2] = 0
}

function fillD(){
  for(var i = 0; i < n-1; i++){
    abcd[i][3] = (abcd[i+1][2] - abcd[i][2]) / (3 * h[i])
  }
  abcd[n-1][3] = -abcd[n-1][2] / 6 * h[n-1]
}

function interpolate(sI, x){
  var delta = x - p[sI].x
  return (abcd[sI][0]
         + abcd[sI][1] * (delta) 
         + (abcd[sI][2] * (Math.pow(delta, 2)) / 2)
         + (abcd[sI][3] * (Math.pow(delta, 3)) / 6)); 
}

function defineSIndex(x){
  for(var i=1; i < p.length; i++){
    if(x < p[i].x) return i-1
  } 
  return i-1;
}



