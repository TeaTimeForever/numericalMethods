var solveTridiagonal = require('./tridiagonal')
var xy = [
  [0, 2.1],
  [3.3, 5.9],
  [6.6, 2.4],
  [9.9, 3.4]]

var abcd = []

var h = fillDeltaValues()
var matrixes = fillTridiagonalMatrix()
fillCValues()
fillAValues()
fillDValues()
fillBValues()


console.log(abcd)



function fillAValues(){
  for(var i = 0; i < xy.length; i++){
    abcd[i][0] = xy[i][1]
  }
}

function fillBValues(){
  for(var i = 1; i < xy.length; i++){
    abcd[i][1] = (h[i-1][0] * abcd[i][2])/2 - (Math.pow(h[i-1][0], 2)*abcd[i][3])/6 + h[i-1][1]/h[i-1][0]
  }
}

function fillCValues(){
  var c = solveTridiagonal(matrixes[0], matrixes[1])
  abcd.push([, , 0, ])
  for(var i = 0; i < c.length; i++) {
    abcd.push([, , c[i], ])
  }
  abcd.push([, , 0, ])
}

function fillDValues(){
  for(var i = 1; i < xy.length; i++){
    abcd[i][3] = (abcd[i][2] - abcd[i-1][2]) / h[i-1][0] 
  }
}
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

  for(var i = 0; i < h.length-1; i++){
    var equation = []
    for(var j = 1; j < i; j++){
      // добавляем нули с правой стороны диагонали
      equation.push(0)
    }
    if(i != 0) equation.push(h[i][0]) // первое уравнение должно содержать только 2й и 3й элементы
    
    equation.push(2*(h[i][0] + h[i+1][0]))
    
    if(i != h.length-2) {  // последнее уравнение должно содержать только 1й и 2й элементы
      equation.push(h[i+1][0])
      matrixB.push([6 * (h[i+1][1] / h[i+1][0] - h[i][1] /h[i][0])])
    } else {
      //последнее значение матрицы B вычисляется иначе, чтобы не получить неопределенность вида 0/0 - см. h
      matrixB.push([-6*h[i][1]/h[i][0]])
    }
            
    while(h.length - 1 != equation.length){
      // добавляем нули с левой стороны диагонали (-1 потому что один узел в h фективен (последний))
      equation.push(0)
    }
    matrixA.push(equation)
  }
  return [matrixA, matrixB]
}
