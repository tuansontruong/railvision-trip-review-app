export const tripDataReviewExample = {
  COOL: {
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
}

export const tripDataReviewExample2 = {
  GREAT: {
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
}

export const tripDataReviewExample3 = {
  OK: {
    date: '2011-02-03',
    averageSpeedInMph: 60,
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
        id: 'HCM',
        name: 'Ho Chi Minh',
        arrivedTime: '16:30',
        departedTime: '17:25'
      },
      {
        id: 'HN',
        name: 'Ha Noi',
        arrivedTime: '17:30',
        departedTime: '17:35'
      },
      {
        id: 'RAN',
        name: 'Rancel',
        arrivedTime: '18:00',
        departedTime: null
      }
    ]
  }
}

export const tripDataReviewExample4 = {
  GOOD: {
    date: '2011-02-03',
    averageSpeedInMph: 50,
    tripDetails: [
      {
        id: 'MAZ',
        name: 'Mazhar',
        arrivedTime: null,
        departedTime: '00:00'
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
        arrivedTime: '22:00',
        departedTime: null
      }
    ]
  }
}

export const combinedTripDataReviewExample = {
  ...tripDataReviewExample,
  ...tripDataReviewExample2
}
export const combinedTripDataReviewExample2 = {
  ...tripDataReviewExample,
  ...tripDataReviewExample2,
  ...tripDataReviewExample3,
  ...tripDataReviewExample4
}
