var xy = [
  [0, 2.1],
  [3.3, 5.9],
  [6.6, 2.4],
  [9.9, 3.4]]

var abcd = [[0, 0, 0, 0]]

var h = fillDeltaValues()
var matrixes = fillTridiagonalMatrix()

console.log(matrixes)

function fillDeltaValues(){
  var h = []
  for(var i=1; i < xy.length; i++){
      h.push([xy[i][0] - xy[i-1][0], xy[i][1] - xy[i-1][1]])
  }
  h.push([0,0])
  return h
}

function fillTridiagonalMatrix(){
  var matrixA = []
  var matrixB = []

  console.log(h)
  for(var i = 0; i < h.length-1; i++){
    var equation = []
    for(var j = 1; j < i; j++){ // добавляем нули с правой стороны диагонали
      equation.push(0)
    }
    if(i != 0) equation.push(h[i][0])
    equation.push(2*(h[i][0] + h[i+1][0]))
    
    if(i != h.length-2) {
      equation.push(h[i+1][0])
      matrixB.push(6 * (h[i+1][1] / h[i+1][0] - h[i][1] /h[i][0]))
    } else {
      matrixB.push(-6*h[i][1]/h[i][0])
    }
            
    while(h.length - 1 != equation.length){ // добавляем нули с левой стороны диагонали
      equation.push(0)
    }
    matrixA.push(equation)
    
  }
  return [matrixA, matrixB]
}
