import DetailedEventInfo from "../../components/DetailedEventInfo/DetailedEventInfo"
import TicketAmount from "../../components/TicketAmount/TicketAmount"
import Button from "../../components/Button/Button"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchData } from "../../services/api"

function DetailedEventPage() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

  const text = 'Add to cart'

  useEffect(() => {
    console.log("ID from URL params:", id);
    const getEvent = async () => {
      const allEvents = await fetchData();
      console.log("allEvents:", allEvents);
      const foundEvent = allEvents.find((e) => String(e.id) === id);
      setEvent(foundEvent);
    };
    getEvent()
  }, [id]);

  if (!event) return <p>Laddar...</p>;

  return (
    <>
      <DetailedEventInfo event={event}/>
      <TicketAmount info={event.price} event={event}/>
      <Button text={text}/>
    </>
  )
}

export default DetailedEventPage