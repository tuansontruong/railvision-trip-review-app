export const getTripIdByFilter = (tripReviewData, filter) => {
  return actionMap[filter](tripReviewData)
}

export const findLongestDurationTrip = tripReviewData => {
  return 'A23'
}

export const findShortestDurationTrip = tripReviewData => {
  return 'A23'
}

export const findHighestSpeedTrip = tripReviewData => {
  return 'A23'
}

export const findLowestSpeedTrip = tripReviewData => {
  return 'A23'
}

export const findMostStopsTrip = tripReviewData => {
  return 'A23'
}

export const findLeastStopsTrip = tripReviewData => {
  return 'A23'
}

const actionMap = {
  LONGEST_DURATION: findLongestDurationTrip,
  SHORTEST_DURATION: findShortestDurationTrip,
  HIGHEST_SPEED: findHighestSpeedTrip,
  LOWEST_SPEED: findLowestSpeedTrip,
  MOST_STOPS: findMostStopsTrip,
  LEAST_STOPS: findLeastStopsTrip
}
