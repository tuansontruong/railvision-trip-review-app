import React, { useContext, useState } from 'react'

import { TripReviewContext } from '../../context/tripReviewContext'

import TripDetails from '../../components/TripDetails'
import NavigationButton from '../../components/NavigationButton'

import { PATHS } from '../../config/paths'
import Container from '../../layouts/Container'
import TripHeader from '../../components/TripHeader'
import TripSelector from '../../components/TripSelector'
import { transformData } from '../../utils/dataTransformHandler'

const TripReview = () => {
  const tripReviewData = useContext(TripReviewContext)
  const [currentTripId, setCurrentTripId] = useState(null)

  const currentTrip = tripReviewData && tripReviewData[currentTripId]

  const tripReviewDataList = transformData(tripReviewData)

  return (
    <Container>
      <TripHeader text="Trip Review" />
      <TripSelector
        data={{
          selectorTitle: 'Trip Selector',
          options: tripReviewDataList,
          labelField: 'signature',
          valueField: 'tripId',
          searchBy: 'id',
          onChangeFn: setCurrentTripId,
          onChangeValueKey: 'tripId'
        }}
      />

      {currentTrip && (
        <div key={Math.random()}>
          <TripDetails trip={currentTrip} />{' '}
        </div>
      )}
      <NavigationButton path={PATHS.FILTER} btnText={'Go to Trip Filter'} />
    </Container>
  )
}

export default TripReview
