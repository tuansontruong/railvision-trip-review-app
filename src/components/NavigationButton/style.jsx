import styled from 'styled-components'

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  margin: 2em 0;
  background: ${({ theme }) => theme.btnColor};
  border-radius: 3px;
  border: none;
  color: #ffffff;
  padding: 1em 5em;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`
