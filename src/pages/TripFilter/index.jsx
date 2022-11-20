import { useContext, useState } from 'react'

import { TripReviewContext } from '../../context/tripReviewContext'

import { PATHS } from '../../config/paths'

import NavigationButton from '../../components/NavigationButton'
import TripHeader from '../../components/TripHeader'
import Container from '../../layouts/Container'
import TripSelector from '../../components/TripSelector'
import TripDetails from '../../components/TripDetails'
import { getTripIdByFilter } from '../../utils/filterHandler'

const filterOptions = [
  {
    id: 'LONGEST_DURATION',
    name: 'Longest Trip by Duration'
  },
  {
    id: 'SHORTEST_DURATION',
    name: 'Shortest Trip by Duration'
  },
  {
    id: 'HIGHEST_SPEED',
    name: 'Highest Speed Trip'
  },
  {
    id: 'LOWEST_SPEED',
    name: 'Lowest Speed Trip'
  },
  {
    id: 'MOST_STOPS',
    name: 'Most Number of Stops'
  },
  {
    id: 'LEAST_STOPS',
    name: 'Least Number of Stops'
  }
]

const TripFilter = () => {
  const [filter, setFilter] = useState(null)

  const tripReviewData = useContext(TripReviewContext)
  const currentTripId = getTripIdByFilter(tripReviewData, filter)
  const filteredTrip =
    tripReviewData && currentTripId && tripReviewData[currentTripId]

  return (
    <Container>
      <TripHeader text="Trip Filter" />
      <TripSelector
        data={{
          selectorTitle: 'Trip Selector',
          options: tripReviewData ? filterOptions : null,
          labelField: 'name',
          valueField: 'id',
          searchBy: 'id',
          onChangeFn: setFilter,
          onChangeValueKey: 'id'
        }}
      />
      {filteredTrip && (
        <div key={Math.random()} className="fade-in">
          <TripDetails trip={filteredTrip} />{' '}
        </div>
      )}

      <NavigationButton path={PATHS.REVIEW} btnText={'Go to Trip Review'} />
    </Container>
  )
}

export default TripFilter
