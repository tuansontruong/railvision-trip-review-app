import styled from 'styled-components'

export const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all ease 0.5s;
`
