// A - coefficients, B - values
function getAuxiliaryMatrix(a, b){
  var auxBetaAlpha = []
  auxBetaAlpha.push([b[0]/a[0][0], a[0][1]/a[0][0]])
  var rowsInA = a.length
  for(var i = 1; i < rowsInA - 1; i++){
    var beta = (b[i] - (a[i][i-1] * auxBetaAlpha[i-1][0])) / (a[i][i] - a[i][i-1] * auxBetaAlpha[i-1][1])
    var alpha = a[i][i+1] / ( a[i][i] - a[i][i-1] * auxBetaAlpha[i-1][1])
    auxBetaAlpha.push([ beta, alpha])
  }

  var partA = b[rowsInA - 1] - a[rowsInA - 1][rowsInA - 2] * auxBetaAlpha[rowsInA-2][0]
  var partB = a[rowsInA-1][rowsInA-1] - a[rowsInA-1][rowsInA-2] * auxBetaAlpha[rowsInA-2][1]

  var lastBeta = partA/partB
  var lastAlpha = 0

  console.log(lastBeta)
  auxBetaAlpha.push([lastBeta, lastAlpha])

  return auxBetaAlpha
}

a = [[1, 4, 0], [3, 2, 7], [0, 1, 3]]
b = [[17], [35], [9]]

function solveTridiagonal(a, b){
  var auxM = getAuxiliaryMatrix(a, b)
  console.log(auxM)
  var rowsInAuxM = auxM.length
  var x = []
  x[rowsInAuxM - 1] = auxM[rowsInAuxM-1][0]
  for(var i = rowsInAuxM-2; i >= 0; i--){
    x[i] = auxM[i][0] - auxM[i][1] * x[i+1]
  }
  return x
}

//console.log(getAuxiliaryMatrix(a, b))
console.log(solveTridiagonal(a, b))
