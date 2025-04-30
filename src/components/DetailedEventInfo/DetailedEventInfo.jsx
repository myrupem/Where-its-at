import Button from "../Button/Button"
import TicketAmount from "../TicketAmount/TicketAmount"
import NameNPlace from "../NameNPlace/NameNPlace"

import './detailedEventInfo.css'

function DetailedEventInfo({ event }) {
  const text = 'Add to cart'

  return (
      <section className="detailed__wrapper"> 
        <h1>Event</h1>
        <NameNPlace event={event}/>
        <p>@ {event.where}</p>
      </section>
  )
}

export default DetailedEventInfo