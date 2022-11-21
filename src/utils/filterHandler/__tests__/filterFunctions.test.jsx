import {
  findHighestSpeedTrip,
  findLeastStopsTrip,
  findLongestDurationTrip,
  findLowestSpeedTrip,
  findMostStopsTrip,
  findShortestDurationTrip
} from '..'
import { transformData } from '../../dataTransformHandler'
import { combinedTripDataReviewExample2 } from './__mocks__/data'

const tripReviewDataListExample = transformData(combinedTripDataReviewExample2)

test('Test filter longest duration trip', () => {
  expect(
    findLongestDurationTrip(tripReviewDataListExample, 'LONGEST_DURATION')
  ).toEqual('GOOD')
})

test('Test filter longest duration trip', () => {
  expect(
    findShortestDurationTrip(tripReviewDataListExample, 'SHORTEST_DURATION')
  ).toEqual('COOL')
})

test('Test filter highest speed trip', () => {
  expect(
    findHighestSpeedTrip(tripReviewDataListExample, 'HIGHEST_SPEED')
  ).toEqual('GREAT')
})

test('Test filter lowest speed trip', () => {
  expect(
    findLowestSpeedTrip(tripReviewDataListExample, 'LOWEST_SPEED')
  ).toEqual('COOL')
})

test('Test filter most stops trip', () => {
  expect(findMostStopsTrip(tripReviewDataListExample, 'MOST_STOPS')).toEqual(
    'OK'
  )
})

test('Test filter least stops trip', () => {
  expect(findLeastStopsTrip(tripReviewDataListExample, 'LEAST_STOPS')).toEqual(
    'COOL'
  )
})
