import DetailedEventInfo from "../../components/DetailedEventInfo/DetailedEventInfo"
import TicketAmount from "../../components/TicketAmount/TicketAmount"
import Button from "../../components/Button/Button"

import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchData } from "../../services/api"
import useCartStore from "../../store/useCartStore"

function DetailedEventPage() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [numOfTickets, setNumOfTickets] = useState(0)

  const addToCart = useCartStore((state) => state.addToCart)
  const navigate = useNavigate();

  const text = 'Add to cart'

  useEffect(() => {
    const getEvent = async () => {
      const allEvents = await fetchData();
      console.log("allEvents:", allEvents);
      const foundEvent = allEvents.find((e) => String(e.id) === id);
      setEvent(foundEvent);
    };
    getEvent()
  }, [id]);

  const handleAddToCart = () => {
    const newTicket = {
      uid: crypto.randomUUID(),
      ...event,
      quantity: numOfTickets
    };
    addToCart(newTicket);
    navigate(-1);
  }

  if (!event) return <p>Laddar...</p>;

  return (
    <>
      <DetailedEventInfo event={event}/>
      <TicketAmount 
      info={event.price}
      event={event}
      numOfTickets={numOfTickets}
      setNumOfTickets={setNumOfTickets}
      />
      <Button text={text} handleClick={handleAddToCart}/>
    </>
  )
}

export default DetailedEventPage