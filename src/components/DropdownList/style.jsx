import Select from 'react-dropdown-select'
import styled from 'styled-components'

export const StyledSelect = styled(Select)`
  background: ${({ theme }) => theme.dropdownBackgroundColor};
  min-width: 250px;

  .react-dropdown-select-content {
    padding: 7px 2px;
    color: ${({ theme }) => theme.color};
  }
  .react-dropdown-select-dropdown-handle {
    color: ${({ theme }) => theme.color};
  }
  .react-dropdown-select-item {
    color: black;
  }
  ${({ dropdownRenderer }) =>
    dropdownRenderer &&
    `
      .react-dropdown-select-dropdown {
          overflow: initial;
          background: red;
      }
  `}
`
