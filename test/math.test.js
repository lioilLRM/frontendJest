// const math = require('../math')
// const { add, minus } = math

import { add, minus } from '../math.js'

test('add methods2', () => {
  expect(add(5, 5)).toBe(10)
})

test('minus methods3', () => {
  expect(minus(10, 5)).toBe(5)
})
