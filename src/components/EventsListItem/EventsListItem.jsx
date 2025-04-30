import { Link } from "react-router-dom"

function EventsListItem({ event }) {

  return (
    <> 
      <Link to={`/event/${event.id}`} className="event-list__item">
        <section className='date__wrapper'>
            <p>{event.when.date.slice(0, 6).toUpperCase()}</p>
        </section>
        <section>
            <h2>{event.name}</h2>
            <p>{event.where}</p>
            <p>{event.when.from} - {event.when.to}</p>
        </section>
        <p>{event.price} sek</p>
      </Link>
    </>
  )
}

export default EventsListItem