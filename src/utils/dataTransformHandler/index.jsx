import {
  getTotalTripDuration,
  getTotalTripDurationInSeconds
} from '../dateTimeHandler'

// Take the original data object and return an array of objects where each object has 4 new fields:
// 1.tripId  -  2.signature  -  3.durationInSeconds  -  4. numberOfStops
export const transformData = tripReviewData => {
  if (!tripReviewData) return null

  return Object.entries(tripReviewData).map(tripReviewEntry => {
    const [tripId, info] = tripReviewEntry
    const startStationDepartedTime = info.tripDetails[0]?.departedTime
    const endStationArrivedTime =
      info.tripDetails[info.tripDetails.length - 1]?.arrivedTime

    return {
      tripId,
      signature: `${tripId} | ${info.tripDetails[0].id} - ${
        info.tripDetails.slice(-1)[0].id
      }`,
      durationInSeconds: getTotalTripDurationInSeconds(
        getTotalTripDuration(startStationDepartedTime, endStationArrivedTime)
      ),
      numberOfStops: info.tripDetails.length,
      ...info
    }
  })
}
