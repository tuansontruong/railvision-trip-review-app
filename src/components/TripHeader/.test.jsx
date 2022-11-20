import { render, screen } from '@testing-library/react'
import TripHeader from '.'

test('Trip header should contains props.text', () => {
  render(<TripHeader text="This is a text" />)
  const linkElement = screen.getByText('This is a text')
  expect(linkElement).toBeInTheDocument()
})
