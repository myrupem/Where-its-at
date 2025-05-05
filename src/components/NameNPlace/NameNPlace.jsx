import React from 'react'
import './nameNPlace.css'

function NameNPlace({ event }) {
  if (!event) {
    return <p>Loading event...</p>;
  }

  return (
    <section className='nameNPlace__wrapper'>
        <h1>{event.name}</h1>
        <p>{event.when.date} kl {event.when.from} - {event.when.to}</p>
    </section>
  )
}

export default NameNPlace