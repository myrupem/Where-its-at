import React from 'react'
import styled from 'styled-components'

const StyledBtn  = styled.button`
width: 310px;
height: 60px;
background-color: #37AEAB;
color: #FFFFFF;
font-family: 'Fira Sans';
font-weight: 600;
font-size: 22px;
text-align: center;
border-radius: 3px;
`

function StyledButton({ text, handleClick }) {
  return (
    <StyledBtn  onClick={handleClick}>{text}</StyledBtn >
  )
}

export default StyledButton