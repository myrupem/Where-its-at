import EventsListItem from "../EventsListItem/EventsListItem"
import styled from "styled-components"

const ListEvent = styled.section`
  display: flex;
  flex-direction: column;
`

function EventsList({ events }) {

  return (
    <>
      <ListEvent>
        {events.map((event) => {
          return <EventsListItem key={event.id} event={event}/>
        })}
      </ListEvent>
    </>
  )
}

export default EventsList