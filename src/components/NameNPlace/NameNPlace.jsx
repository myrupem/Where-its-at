import React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.variant === 'detailed' ? 'center' : 'flex-start'};
  flex-direction: column;
  padding: 0.5rem;
`

const EventName = styled.h1`
font-family: 'Sansita One';
font-size: ${(props) => props.variant === 'detailed' ? '35px' : '24px'};
font-weight: 400;
color: #F56B9A;
`

const EventDate = styled.p`
font-size: ${(props) => props.variant === 'detailed' ? '19px' : '14px'};;
font-weight: ${(props) => props.variant === 'detailed' ? '700' : '400'};;
color: #37AEAB;
`

const NoEvent = styled.p`
  align-items: center;
  text-align: center;
  padding: 0 0 18rem 0;
  margin: 8rem 0 5rem 0;
  font-family: 'Sansita One';
  font-weight: 400;
  font-size: 20px;
  color: #F56B9A;
`

function NameNPlace({ variant, event }) {
  if (!event) {
    return <NoEvent>Loading event...</NoEvent>;
  }

  return (
    <StyledWrapper variant={variant}>
        <EventName variant={variant}>{event.name}</EventName>
        <EventDate variant={variant}>{event.when.date} kl {event.when.from} - {event.when.to}</EventDate>
    </StyledWrapper>
  )
}

export default NameNPlace