import moment from 'moment'

/* Get duration in HH:MM format */
export const getTotalTripDuration = (startTimeInHHMM, endTimeInHHMM) => {
  if (!moment(startTimeInHHMM, 'HH:mm').isValid()) return 'Invalid Date'
  if (!moment(endTimeInHHMM, 'HH:mm').isValid()) return 'Invalid Date'

  const startTime = moment(startTimeInHHMM, 'HH:mm')
  const endTime = moment(endTimeInHHMM, 'HH:mm')
  const hours = moment.utc(endTime.diff(startTime)).format('HH')
  const minutes = moment.utc(endTime.diff(startTime)).format('mm')
  return `${hours}:${minutes}`
}

/* Convert duration in HH:MM to duration in seconds*/
export const getTotalTripDurationInSeconds = durationInHHmm => {
  return moment.duration(durationInHHmm).asSeconds()
}

/* yyyy-mm-dd to MMMM DD, YYYY) */
export const convertDateFormat = yyyyMMdd => {
  if (!moment(yyyyMMdd, 'YYYY-MM-DD').isValid()) return 'Invalid Date'

  return moment(yyyyMMdd, 'YYYY-MM-DD').format('MMMM DD, YYYY').toUpperCase()
}
