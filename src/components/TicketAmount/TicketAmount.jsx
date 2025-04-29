import React from 'react'

function TicketAmount({ info, event }) {
  
  return (
    <div className='ticket-amount__wrapper'>
      <p>{info}</p>
      <section>
        <button>-</button>
        <p>{/* {event.price} */}</p>
        <button>+</button>
      </section>
    </div>
  )
}

export default TicketAmount