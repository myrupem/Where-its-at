import React from 'react'
import './landingPage.css'
import logo from '../assets/img/logo.png';
import styled from 'styled-components';

const LandingpageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const ImgLogo = styled.img`
  height: 178px;
  width: 182px;
  display: block;
  object-fit: contain;
`

const LandingPageTitle = styled.h1`
font-family: 'Sansita One';
font-size: 32px;
font-weight: 400;
color: #F56B9A;
margin: 1rem;
`

const LandingPageSubTitle = styled.h2`
font-family: 'Fira Sans';
font-size: 22px;
font-weight: 400;
font-style: italic;
`

function LandingPage() {
  return (
    <LandingpageWrapper>
        <ImgLogo src={logo} alt="logo" />
        <LandingPageTitle>Where its @</LandingPageTitle>
        <LandingPageSubTitle className='landing-page__subtitle'>Ticketing made easy</LandingPageSubTitle>
    </LandingpageWrapper>
  )
}

export default LandingPage