import React from 'react'

function EventsListItem({ event }) {
    let month = event.when.date
    let trimmedMonth = month.slice(0, 6).toUpperCase()

  return (
    <> 
        <section className='date__wrapper'>
            <p>{trimmedMonth}</p>
        </section>
        <section>
            <h2>{event.name}</h2>
            <p>{event.where}</p>
            <p>{event.when.from} - {event.when.to}</p>
        </section>
        <p>{event.price} sek</p>
    </>
  )
}

export default EventsListItem