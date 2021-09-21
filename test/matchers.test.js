test('weapon pair', () => {
  expect('如意金箍棒').toBe('如意金箍棒')
})

test('匹配内容相等', () => {
  const obj = { number: 1 }
  // expect(obj).toBe({ number: 1 })
  expect(obj).toEqual({ number: 1 })
})

test('toBeNull', () => {
  const a = null
  expect(a).toBeNull()
})

test('toBeUndefined测试', () => {
  const a = undefined
  expect(a).toBeUndefined()
})

test('toBeDefined测试', () => {
  const a = 'undefined'
  expect(a).toBeDefined()
})

test('toBeTruthy 测试', () => {
  const a = 1
  expect(a).toBeTruthy()
})

test('toBeFalsy 测试', () => {
  const a = 0
  expect(a).toBeFalsy()
})

test('toBeGreaterThan匹配器', () => {
  const count = 10
  expect(count).toBeGreaterThan(9)
})

test('toBeLessThan匹配器', () => {
  const count = 10
  expect(count).toBeLessThan(11)
})

test('toBeGreaterThanOrEqual匹配器', () => {
  const count = 10
  expect(count).toBeGreaterThanOrEqual(10)
})
test('toBeCloseTo 浮点匹配器', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3)
})

test('toMatch', () => {
  const str = '神州，天舟，天宫'
  expect(str).toMatch('神州')
})

test('toContain', () => {
  const str = ['神州', '天舟', '天宫']
  expect(str).toContain('神州')
})

