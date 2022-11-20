import { Link } from 'react-router-dom'
import { Button } from './style'

const NavigationButton = ({ path, btnText }) => {
  return (
    <Link to={path}>
      <Button> {btnText}</Button>
    </Link>
  )
}

export default NavigationButton
