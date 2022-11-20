import { StyledSelect } from './style'

const DropdownList = ({ data }) => {
  const {
    options,
    labelField,
    valueField,
    searchBy,
    onChangeFn,
    onChangeValueKey
  } = data
  return (
    <StyledSelect
      placeholder={!options ? 'Loading Trips...' : 'Select Trip'}
      addPlaceholder={''}
      color={'#0074D9'}
      disabled={!options}
      loading={!options}
      searchBy={searchBy}
      separator={false}
      clearable={false}
      searchable={true}
      create={false}
      keepOpen={false}
      dropdownHandle={true}
      dropdownHeight={'150px'}
      direction={'ltr'}
      multi={false}
      labelField={labelField}
      valueField={valueField}
      options={options}
      dropdownGap={5}
      keepSelectedInList={true}
      onDropdownOpen={() => undefined}
      onDropdownClose={() => undefined}
      onClearAll={() => undefined}
      onSelectAll={() => undefined}
      onChange={values => onChangeFn(values[0][onChangeValueKey])}
      noDataLabel="No matches found"
      closeOnSelect={false}
    />
  )
}

export default DropdownList
