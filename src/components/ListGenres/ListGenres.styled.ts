import styled from 'styled-components'
import { StylesConfig } from 'react-select'

interface Option {
  value: number
  label: string
}

export const StyledGenreList = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
`

export const customStyles: StylesConfig<Option, false> = {
  control: (provided) => ({
    ...provided,
    width: '100%',
    backgroundColor: 'transparent',
    color: '#fff',
    borderColor: '#fff',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid #fff',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  container: (provided) => ({
    ...provided,
    borderRadius: '3px',
    margin: '0.3rem 0',
    padding: '2px 0',
    width: '170px',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    background: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#fff',
    '&:hover': {
      color: '#fff',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? '#ffc9c9' : 'transparent',
    cursor: 'pointer',
  }),
}
