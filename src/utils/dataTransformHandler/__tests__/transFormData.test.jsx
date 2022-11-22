import { transformData } from '..'
import {
  tripDataReviewExample,
  combinedTripDataReviewExample
} from './__mocks__/data'

test('Test transform - 1 trip', () => {
  expect(transformData(tripDataReviewExample)).toEqual([
    {
      tripId: 'COOL',
      signature: 'COOL | TRTO - OSHA',
      durationInSeconds: 3600,
      numberOfStops: 2,
      date: '2022-02-03',
      averageSpeedInMph: 14,
      tripDetails: [
        {
          id: 'TRTO',
          name: 'Toronto',
          arrivedTime: null,
          departedTime: '01:00'
        },
        {
          id: 'OSHA',
          name: 'Oshawa',
          arrivedTime: '2:00',
          departedTime: null
        }
      ]
    }
  ])
})

test('Test transform - 2 trips', () => {
  expect(transformData(combinedTripDataReviewExample)).toEqual([
    {
      tripId: 'COOL',
      signature: 'COOL | TRTO - OSHA',
      durationInSeconds: 3600,
      numberOfStops: 2,
      date: '2022-02-03',
      averageSpeedInMph: 14,
      tripDetails: [
        {
          id: 'TRTO',
          name: 'Toronto',
          arrivedTime: null,
          departedTime: '01:00'
        },
        {
          id: 'OSHA',
          name: 'Oshawa',
          arrivedTime: '2:00',
          departedTime: null
        }
      ]
    },
    {
      tripId: 'GREAT',
      signature: 'GREAT | MAZ - RAN',
      durationInSeconds: 10800,
      numberOfStops: 3,
      date: '2011-02-03',
      averageSpeedInMph: 122,
      tripDetails: [
        {
          id: 'MAZ',
          name: 'Mazhar',
          arrivedTime: null,
          departedTime: '15:00'
        },
        {
          id: 'GAE',
          name: 'Gael',
          arrivedTime: '15:30',
          departedTime: '16:25'
        },
        {
          id: 'RAN',
          name: 'Rancel',
          arrivedTime: '18:00',
          departedTime: null
        }
      ]
    }
  ])
})

test('Test transform - wrong speed', () => {
  expect(transformData(tripDataReviewExample)).not.toEqual([
    {
      tripId: 'COOL',
      durationInSeconds: 3600,
      numberOfStops: 2,
      date: '2022-02-03',
      averageSpeedInMph: 999999999999999,
      tripDetails: [
        {
          id: 'TRTO',
          name: 'Toronto',
          arrivedTime: null,
          departedTime: '01:00'
        },
        {
          id: 'OSHA',
          name: 'Oshawa',
          arrivedTime: '2:00',
          departedTime: null
        }
      ]
    }
  ])
})
