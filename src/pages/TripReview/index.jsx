import { useContext } from 'react'
import Container from '../../layouts/Container'
import { TripReviewContext } from '../../context/tripReviewContext'

import NavigationButton from '../../components/NavigationButton'
import TripHeader from '../../components/TripHeader'
import TripDetails from '../../components/TripDetails'

import { PATHS } from '../../config/paths'

const TripFilter = () => {
  const tripReviewData = useContext(TripReviewContext)
  const currentTrip = tripReviewData && 'A23'

  return (
    <Container>
      <TripHeader text="Trip Review" />
      {currentTrip && (
        <div key={Math.random()}>
          <TripDetails trip={currentTrip} />{' '}
        </div>
      )}
      <NavigationButton path={PATHS.FILTER} btnText={'Go to Trip Filter'} />
    </Container>
  )
}

export default TripFilter
