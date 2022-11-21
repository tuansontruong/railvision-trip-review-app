import { transformData } from '../dataTransformHandler'

export const getTripIdByFilter = (tripReviewData, filter) => {
  if (!(tripReviewData && filter)) return null

  const tripReviewDataList = transformData(tripReviewData)

  return actionMap[filter](tripReviewDataList)
}

export const findLongestDurationTrip = tripReviewDataList => {
  return tripReviewDataList.reduce((prev, current) =>
    prev.durationInSeconds > current.durationInSeconds ? prev : current
  ).tripId
}

export const findShortestDurationTrip = tripReviewDataList => {
  return tripReviewDataList.reduce((prev, current) =>
    prev.durationInSeconds < current.durationInSeconds ? prev : current
  ).tripId
}

export const findHighestSpeedTrip = tripReviewDataList => {
  return tripReviewDataList.reduce((prev, current) =>
    prev.averageSpeedInMph > current.averageSpeedInMph ? prev : current
  ).tripId
}

export const findLowestSpeedTrip = tripReviewDataList => {
  return tripReviewDataList.reduce((prev, current) =>
    prev.averageSpeedInMph < current.averageSpeedInMph ? prev : current
  ).tripId
}

export const findMostStopsTrip = tripReviewDataList => {
  return tripReviewDataList.reduce((prev, current) =>
    prev.numberOfStops > current.numberOfStops ? prev : current
  ).tripId
}

export const findLeastStopsTrip = tripReviewDataList => {
  return tripReviewDataList.reduce((prev, current) =>
    prev.numberOfStops < current.numberOfStops ? prev : current
  ).tripId
}

const actionMap = {
  LONGEST_DURATION: findLongestDurationTrip,
  SHORTEST_DURATION: findShortestDurationTrip,
  HIGHEST_SPEED: findHighestSpeedTrip,
  LOWEST_SPEED: findLowestSpeedTrip,
  MOST_STOPS: findMostStopsTrip,
  LEAST_STOPS: findLeastStopsTrip
}
