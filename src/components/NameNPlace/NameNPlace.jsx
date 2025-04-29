import React from 'react'

function NameNPlace({ event }) {
  return (
    <section>
        <p>You are about to score some tickets to</p>
        <h1>{event.name}</h1>
        <p>{event.when} kl {event.when.from} - {event.when.to}</p>
    </section>
  )
}

export default NameNPlace