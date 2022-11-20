import DropdownList from '../DropdownList'
import { Container, DropdownTitle } from './style'

const TripSelector = ({ data }) => {
  return (
    <Container>
      <DropdownTitle> {data.selectorTitle} </DropdownTitle>
      <DropdownList data={data} />
    </Container>
  )
}

export default TripSelector
