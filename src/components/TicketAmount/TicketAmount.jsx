import React from 'react'

function TicketAmount({ info, event }) {
  
  if (React.isValidElement(info)) {
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

  // Om `info` inte är en komponent 
  return (
    <div className="ticket-amount__wrapper">
      <p>{info}</p>
      <section>
        <button>-</button>
        <p>{event.price} SEK</p> 
        <button>+</button>
      </section>
    </div>
  );
}

export default TicketAmount