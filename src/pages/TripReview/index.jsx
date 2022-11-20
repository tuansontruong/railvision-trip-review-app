import Container from '../../layouts/Container'

import NavigationButton from '../../components/NavigationButton'
import TripHeader from '../../components/TripHeader'

const TripFilter = () => {
  return (
    <Container>
      <TripHeader text="Trip Review" />
      <NavigationButton path={PATHS.FILTER} btnText={'Go to Trip Filter'} />
    </Container>
  )
}

export default TripFilter
