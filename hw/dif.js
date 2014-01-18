function f(x) {
  return x / Math.pow( Math.sin(3*x),2)
}

var dx = 0.18

function df(x) {
  console.log('\\frac{f(' + x + ' + ' + dx + ') - f(' + x +' - ' + dx + ')}{' + (2*dx) + ' } = ' +( (f(x + dx) - f(x - dx)) / 2 * dx) )
 // return (f(x + dx) - f(x - dx)) / 2 * dx
}

//console.log(f(1))
df(1)
