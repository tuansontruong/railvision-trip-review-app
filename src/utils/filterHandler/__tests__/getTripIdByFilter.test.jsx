import { getTripIdByFilter } from '..'
import { combinedTripDataReviewExample2 } from './testData'

test('Get trip id by longest duration', () => {
  expect(
    getTripIdByFilter(combinedTripDataReviewExample2, 'LONGEST_DURATION')
  ).toEqual('GOOD')
})

test('Get trip id by shortest duration', () => {
  expect(
    getTripIdByFilter(combinedTripDataReviewExample2, 'SHORTEST_DURATION')
  ).toEqual('COOL')
})

test('Get trip id by highest speed', () => {
  expect(
    getTripIdByFilter(combinedTripDataReviewExample2, 'HIGHEST_SPEED')
  ).toEqual('GREAT')
})

test('Get trip id by lowest speed', () => {
  expect(
    getTripIdByFilter(combinedTripDataReviewExample2, 'LOWEST_SPEED')
  ).toEqual('COOL')
})

test('Get trip id by most stops', () => {
  expect(
    getTripIdByFilter(combinedTripDataReviewExample2, 'MOST_STOPS')
  ).toEqual('OK')
})

test('Get trip id by least stops', () => {
  expect(
    getTripIdByFilter(combinedTripDataReviewExample2, 'LEAST_STOPS')
  ).toEqual('COOL')
})
