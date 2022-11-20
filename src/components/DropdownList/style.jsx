import Select from 'react-dropdown-select'
import styled from 'styled-components'

export const StyledSelect = styled(Select)`
  background: red;
  min-width: 250px;

  .react-dropdown-select-content {
    padding: 7px 2px;
    color: black;
  }
  .react-dropdown-select-dropdown-handle {
    color: black;
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
