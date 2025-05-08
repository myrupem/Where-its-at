import React from 'react'
import styled from 'styled-components'

const TheSearchBar = styled.div`
  width: 310px;
  height: 40px;
  border-radius: 3px;
  border: none;
  color: #ffffffa7;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
  padding: .7rem;
  text-align: left;
  font-family: 'Fira Sans';
  font-size: 16px;
`

function SearchBar() {
  return (
    <TheSearchBar>Search here</TheSearchBar>
  )
}

export default SearchBar