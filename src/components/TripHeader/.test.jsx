import { render, screen } from '@testing-library/react'
import TripHeader from '.'

test('Trip header should contains text 1', () => {
  render(<TripHeader text="This is a text" />)
  const linkElement = screen.getByText('This is a text')
  expect(linkElement).toBeInTheDocument()
})

test('Trip header should contains text 2', () => {
  render(<TripHeader text="Go to B" />)
  const linkElement = screen.getByText('Go to B')
  expect(linkElement).toBeInTheDocument()
})

test('Trip header should contains text 3', () => {
  render(<TripHeader text="Go to Trip Filter" />)
  const linkElement = screen.getByText('Go to Trip Filter')
  expect(linkElement).toBeInTheDocument()
})

test('Trip header should not contains text', () => {
  render(<TripHeader text="ABC" />)
  const linkElement = screen.queryByText('abc')
  expect(linkElement).toBeNull()
})
