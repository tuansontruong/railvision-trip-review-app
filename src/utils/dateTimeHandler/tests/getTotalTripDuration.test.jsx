import { getTotalTripDuration } from '..'

test('1 hour difference', () => {
  expect(getTotalTripDuration('1:00', '2:00')).toBe('01:00')
})

test('11 hours difference', () => {
  expect(getTotalTripDuration('01:00', '12:00')).toBe('11:00')
})

test('1 minute difference', () => {
  expect(getTotalTripDuration('01:59', '02:00')).toBe('00:01')
})

test('12 hours difference', () => {
  expect(getTotalTripDuration('00:00', '12:00')).toBe('12:00')
})

test('0 hour difference', () => {
  expect(getTotalTripDuration('00:00', '24:00')).toBe('00:00')
})

test('Invalid date 1', () => {
  expect(getTotalTripDuration('00:00', '24:01')).toBe('Invalid Date')
})

test('Invalid date 2', () => {
  expect(getTotalTripDuration('44:00', '02:01')).toBe('Invalid Date')
})
