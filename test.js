'use strict'
const assert = require('assert')
const hindex = require('.')
const testset = [
  {
    input: [3, 0, 6, 1, 5],
    answer: { sum: 15, h: 3, i10: 0 }
  },
  {
    input: [0],
    answer: { sum: 0, h: 0, i10: 0 }
  },
  {
    input: [1],
    answer: { sum: 1, h: 1, i10: 0 }
  },
  {
    input: [2, 2, 3],
    answer: { sum: 7, h: 2, i10: 0 }
  },
  {
    input: [12, 54, 22, 1, 12],
    answer: { sum: 101, h: 4, i10: 4 }
  },
  {
    input: [1, 11, 4, 6, 9, 4, 15],
    answer: { sum: 50, h: 4, i10: 2 }
  }
]

for (let tcase of testset) {
  assert.deepEqual(hindex(tcase.input), tcase.answer)
}
