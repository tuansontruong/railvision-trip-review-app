import Container from '../../layouts/Container'

import NavigationButton from '../../components/NavigationButton'
import TripHeader from '../../components/TripHeader'

const TripReview = () => {
  return (
    <Container>
      <TripHeader text="Trip Filter" />
      <NavigationButton path={PATHS.REVIEW} btnText={'Go to Trip Review'} />
    </Container>
  )
}

export default TripReview
