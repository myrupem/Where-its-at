import DetailedEventInfo from "../../components/DetailedEventInfo/DetailedEventInfo"
import TicketAmount from "../../components/TicketAmount/TicketAmount"
import Button from "../../components/Button/Button"

function DetailedEventPage({ event }) {
  let text = 'Add to cart'
  const info = event.price

  return (
    <>
      <DetailedEventInfo event={event}/>
      <TicketAmount info={info} event={event}/>
      <Button text={text}/>
    </>
  )
}

export default DetailedEventPage