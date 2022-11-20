import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const DropdownTitle = styled.label`
  font-size: 10.5px !important;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 5px;
`
