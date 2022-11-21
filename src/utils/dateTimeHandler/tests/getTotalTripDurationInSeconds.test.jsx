import { getTotalTripDurationInSeconds } from '..'

test('1 min should be 60 seconds', () => {
  expect(getTotalTripDurationInSeconds('00:01')).toBe(60)
})

test('1 hour should be 3600 seconds', () => {
  expect(getTotalTripDurationInSeconds('01:00')).toBe(3600)
})

test('1 hour and 1 min should be 3660 seconds', () => {
  expect(getTotalTripDurationInSeconds('01:01')).toBe(3660)
})

test('12 hour and 12 min should be 43920 seconds', () => {
  expect(getTotalTripDurationInSeconds('12:12')).toBe(43920)
})

test('Invalid hh:mm should be 0 seconds', () => {
  expect(getTotalTripDurationInSeconds('ss12:12')).toBe(0)
})
