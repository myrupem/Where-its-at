import './ticketAmount.css'
import React from 'react';

function TicketAmount({ info, numOfTickets, setNumOfTickets }) {

  if (React.isValidElement(info)) {
    return (
      <div className='ticket-amount__wrapper'>
        <p>{info}</p>
        <section className='ticket-amount__select-amount'>
          <button onClick={() => setNumOfTickets (prev => Math.max(prev - 1, 0))}>-</button>
          <p>{numOfTickets}</p>
          <button onClick={() => setNumOfTickets (prev => prev + 1)}>+</button>
        </section>
      </div>
    )
}

  // Om `info` inte är en komponent 
  return (
    <div className="ticket-amount__wrapper">
      <p>{info * numOfTickets}</p>
      <section className='ticket-amount__select-amount'>
        <button onClick={() => setNumOfTickets (prev => Math.max(prev - 1, 0))}>-</button>
        <p>{numOfTickets}</p> 
        <button onClick={() => setNumOfTickets (prev => prev + 1)}>+</button>
      </section>
    </div>
  );
}

export default TicketAmount