'use strict'
/**
 * @param {number[]} nums - The input array of number.
 * @return {{h: number, i10: number, sum: number}}
 *         The return object containning h-index, i10-index, g-index and sum of nums.
 */
function hindex (nums) {
  nums = nums.sort((a, b) => b - a)
  const len = nums.length
  let sum = 0
  let h = 0
  let i10 = 0
  let g = 0
  for (let i = 0; i < len; i++) {
    let curStar = nums[i]
    sum += curStar
    if (curStar >= i + 1) h = i + 1
    if (curStar >= 10) i10++
    if (sum >= (i + 1) * (i + 1)) g = i + 1
  }
  return { sum, h, i10, g }
}
module.exports = hindex
