import React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  padding: 0.5rem;
`

const EventName = styled.h1`
font-family: 'Sansita One';
font-size: 24px;
font-weight: 400;
color: #F56B9A;
`

const EventDate = styled.p`
font-size: 14px;
font-weight: 400;
color: #37AEAB;
`

function NameNPlace({ event }) {
  if (!event) {
    return <p>Loading event...</p>;
  }

  return (
    <StyledWrapper>
        <EventName>{event.name}</EventName>
        <EventDate>{event.when.date} kl {event.when.from} - {event.when.to}</EventDate>
    </StyledWrapper>
  )
}

export default NameNPlace