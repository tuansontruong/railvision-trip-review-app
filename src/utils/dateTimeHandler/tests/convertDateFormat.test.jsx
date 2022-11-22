import { convertDateFormat } from '..'

test('2022-03-04 should be MARCH 04, 2022', () => {
  expect(convertDateFormat('2022-03-04')).toBe('MARCH 04, 2022')
})

test('2021-11-15 should be NOVEMBER 15, 2021', () => {
  expect(convertDateFormat('2021-11-15')).toBe('NOVEMBER 15, 2021')
})

test('2002-1-15 should be JANUARY 15, 2002', () => {
  expect(convertDateFormat('2002-1-15')).toBe('JANUARY 15, 2002')
})

test('1122-9-1 should be SEPTEMBER 01, 1122', () => {
  expect(convertDateFormat('1122-9-1')).toBe('SEPTEMBER 01, 1122')
})

test('1122-9-1 should be SEPTEMBER 02, 2001', () => {
  expect(convertDateFormat('1122-9-1')).not.toBe('SEPTEMBER 02, 2001')
})

test('Invalid date format should gives Invalid Date', () => {
  expect(convertDateFormat('something')).toBe('Invalid Date')
})
test('Invalid date format should gives Invalid Date', () => {
  expect(convertDateFormat('02-2022')).toBe('Invalid Date')
})
