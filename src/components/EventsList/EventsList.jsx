import EventsListItem from "../EventsListItem/EventsListItem"

function EventsList({ events }) {

  return (
    <>
      <section className="event-list">
        {events.map((event) => {
          return <EventsListItem key={event.id} event={event}/>
        })}
      </section>
    </>
  )
}

export default EventsList