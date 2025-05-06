import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
  display: flex;
  margin: .5rem;
  min-height: 66px;
  min-width: 310px;
  font-family: 'Fira Sans';
  text-decoration: none;
  color: #FFFFFF;
  align-items: center;
`

const DateWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 66px;
  border: 1px solid #FFFFFF;
  border-radius: 3px;
  text-align: center;
`

const DateNum = styled.p`
  font-size: 14px;
  font-weight: 700;
`

const DateMonth = styled.p`
  font-size: 10px;
  font-weight: 500;
`

const EventWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  border-bottom: 1px solid #FFFFFF;
  padding: .2rem;
  margin-left: 1rem;
  
`

const EventTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  text-shadow: 1px 1px 0 #F56B9A;
`

const EventWhere = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
`

const EventTime = styled.p`
  font-size: 14px;
  font-weight: 600;
  font-style: italic;
`

const EventPrice = styled.p`
  border-bottom: 1px solid #FFFFFF;
  margin-top: auto;
  font-size: 17px;
  font-weight: 700;
  color: #37AEAB;
  padding-bottom: .2rem;
`

function EventsListItem({ event }) {

  return (
    <> 
      <StyledLink to={`/event/${event.id}`}>
        <DateWrapper>
            <DateNum>{event.when.date.slice(0, 2).toUpperCase()}</DateNum>
            <DateMonth>{event.when.date.slice(2, 6).toUpperCase()}</DateMonth>
        </DateWrapper>
        <EventWrapper>
            <EventTitle>{event.name}</EventTitle>
            <EventWhere>{event.where}</EventWhere>
            <EventTime>{event.when.from} - {event.when.to}</EventTime>
        </EventWrapper>
        <EventPrice>{event.price} sek</EventPrice>
      </StyledLink>
    </>
  )
}

export default EventsListItem