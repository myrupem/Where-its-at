import './ticketAmount.css'
import React from 'react';
import useCartStore from '../../store/useCartStore';


function TicketAmount({ info, event, numOfTickets, setNumOfTickets }) {

  const cart = useCartStore((state) => state.cart)
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  //Kommer från OrderPage
  if (React.isValidElement(info)) {
    return (
      <div className='ticket-amount__wrapper'>
        <div className="ticket-amount__info">
          {info}
        </div>
        <section className='ticket-amount__select-amount'>
          <button onClick={() => updateQuantity(event.uid, Math.max(event.quantity - 1, 0))}>-</button>
          <p>{event.quantity}</p>
          <button onClick={() => updateQuantity(event.uid, event.quantity + 1)}>+</button>
        </section>
      </div>
    )
}

  //Kommer från DetailedEventPage. (`info` inte är en komponent) 
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