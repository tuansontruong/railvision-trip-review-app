import styled, { keyframes } from 'styled-components'

export const HeaderSecondary = styled.h4`
  font-weight: 400;
  color: ${({ theme }) => theme.color};
`
export const HeaderPrimary = styled.h4`
  font-weight: 700;
  color: ${({ theme }) => theme.color};
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const StyledUnoderedList = styled.ul`
  padding: 0;
  list-style-type: none;
  color: ${({ theme }) => theme.color};
  animation: ${fadeIn} 0.8s;
`

export const StyledListItem = styled.li`
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  span span {
    font-size: 14px !important;
    color: ${({ theme }) => theme.secondaryColor};
  }
`

export const StyledListItemSecond = styled.li`
  margin-top: 25px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  gap: 30px;
  span span {
    font-size: 14px !important;
    color: ${({ theme }) => theme.secondaryColor};
  }
`
