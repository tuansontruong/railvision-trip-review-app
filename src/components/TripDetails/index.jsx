import {
  HeaderSecondary,
  HeaderPrimary,
  StyledUnoderedList,
  StyledListItem,
  StyledListItemSecond
} from './style'
import {
  getTotalTripDuration,
  convertDateFormat
} from '../../utils/dateTimeHandler'

const TripDetails = ({ trip }) => {
  const startStationDepartedTime = trip?.tripDetails[0]?.departedTime
  const endStationArrivedTime =
    trip?.tripDetails[trip.tripDetails.length - 1]?.arrivedTime

  return (
    trip && (
      <>
        <HeaderSecondary>{convertDateFormat(trip.date)}</HeaderSecondary>
        <HeaderPrimary>
          TRIP DURATION{' '}
          {getTotalTripDuration(
            startStationDepartedTime,
            endStationArrivedTime
          )}
          H &nbsp;|&nbsp; AVG. SPEED {trip?.averageSpeedInMph} MPH
        </HeaderPrimary>
        <div>
          <StyledUnoderedList>
            {trip?.tripDetails?.map((station, order) => {
              const { id, name, arrivedTime, departedTime } = station

              /* First station */
              if (order === 0)
                return (
                  <StyledListItem key={id}>
                    <img
                      src={require('../../assets/images/HouseIcon.png')}
                      alt="start"
                    />
                    <span>
                      {id} - {name} | <span>Departed {departedTime}</span>
                    </span>
                  </StyledListItem>
                )

              /* Last station */
              if (order === trip.tripDetails.length - 1)
                return (
                  <StyledListItem key={id}>
                    <img
                      src={require('../../assets/images/MapPin.png')}
                      alt="end"
                    />
                    <span>
                      {id} - {name} | <span>Arrived {arrivedTime}</span>
                    </span>
                  </StyledListItem>
                )

              /* Middle stations */
              return (
                <StyledListItemSecond key={id}>
                  <img
                    src={require('../../assets/images/GreenBullet.png')}
                    alt="middle"
                  />
                  <span>
                    {id} - {name} |{' '}
                    <span>
                      Arrived {arrivedTime} | Departed {departedTime}
                    </span>
                  </span>
                </StyledListItemSecond>
              )
            })}
          </StyledUnoderedList>
        </div>
      </>
    )
  )
}

export default TripDetails
