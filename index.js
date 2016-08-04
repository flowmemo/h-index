'use strict'
function hindex (list) {
  list = list.sort((a, b) => b - a)
  const len = list.length
  let sum = 0
  let h = 0
  let i10 = 0
  for (let i = 0; i < len; i++) {
    let curStar = list[i]
    sum += curStar
    if (curStar >= i + 1) h = i + 1
    if (curStar >= 10) i10++
  }
  return {sum, h, i10}
}
module.exports = hindex
