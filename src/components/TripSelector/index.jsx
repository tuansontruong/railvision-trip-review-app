import { Container, DropdownTitle } from './style'
import DropdownList from '../DropdownList'

const TripSelector = ({ data }) => {
  return (
    <Container>
      <DropdownTitle> {data.selectorTitle} </DropdownTitle>
      <DropdownList data={data} />
    </Container>
  )
}

export default TripSelector
