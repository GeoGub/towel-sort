
// You should implement your task here.

module.exports = function towelSort (matrix) {
  matrix = matrix == undefined ? [] : matrix
  let towel = {
    side: true,
    towelMass: [],
  }

  matrix.forEach(mass => {
    if (towel.side === true) {
      towel.side = false
      mass.forEach(el => {
        towel.towelMass.push(el)
      })
    } else {
      towel.side = true
      mass.reverse().forEach(el => {
        towel.towelMass.push(el)
      })
    }
  });
  return towel.towelMass
}
