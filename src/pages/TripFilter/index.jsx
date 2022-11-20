import { useContext } from 'react'
import Container from '../../layouts/Container'

import NavigationButton from '../../components/NavigationButton'
import TripHeader from '../../components/TripHeader'
import TripDetails from '../../components/TripDetails'
import { TripReviewContext } from '../../context/tripReviewContext'

import { PATHS } from '../../config/paths'

const TripReview = () => {
  const tripReviewData = useContext(TripReviewContext)
  const currentTripId = 'A23'
  const filteredTrip = tripReviewData[currentTripId]

  return (
    <Container>
      <TripHeader text="Trip Filter" />
      {filteredTrip && (
        <div key={Math.random()} className="fade-in">
          <TripDetails trip={filteredTrip} />{' '}
        </div>
      )}
      <NavigationButton path={PATHS.REVIEW} btnText={'Go to Trip Review'} />
    </Container>
  )
}

export default TripReview
