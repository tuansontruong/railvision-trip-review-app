import {
  getTotalTripDuration,
  getTotalTripDurationInSeconds
} from '../dateTimeHandler'

// Take the original data object and turn it into a list of objects + additional fields
export const transformData = tripReviewData => {
  return Object.entries(tripReviewData).map(tripReviewEntry => {
    const [tripId, info] = tripReviewEntry
    const startStationDepartedTime = info.tripDetails[0]?.departedTime
    const endStationArrivedTime =
      info.tripDetails[info.tripDetails.length - 1]?.arrivedTime

    // return new object with 3 new fields:
    // 1.tripId  -  2.durationInSeconds  -  3. numberOfStops
    return {
      tripId,
      durationInSeconds: getTotalTripDurationInSeconds(
        getTotalTripDuration(startStationDepartedTime, endStationArrivedTime)
      ),
      numberOfStops: info.tripDetails.length,
      ...info
    }
  })
}

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
