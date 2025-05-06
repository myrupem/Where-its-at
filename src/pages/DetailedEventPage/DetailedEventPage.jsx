import DetailedEventInfo from "../../components/DetailedEventInfo/DetailedEventInfo"
import TicketAmount from "../../components/TicketAmount/TicketAmount"
import StyledButton from "../../components/Button/Button"

import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchData } from "../../services/api"
import useCartStore from "../../store/useCartStore"

import styled from "styled-components"

const DetEventPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Fira Sans';
  padding: 3rem;
  padding-top: 80px;
`
const Title = styled.h1`
  font-family: 'Sansita One';
  font-size: 32px;
  font-weight: 400;
  align-items: center;
  color: #F56B9A;
  position: absolute;
  top: 5%;
`

const SubTitle = styled.p`
  font-size: 19px;
  font-weight: 400;
  font-style: italic;
  text-align: center;
`


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
      quantity: numOfTickets,
    };
    addToCart(newTicket);
    navigate(-1);
  }

  if (!event) return <p>Laddar...</p>;

  return (
    <DetEventPageWrapper>
      <Title>Event</Title>
      <SubTitle>You are about to score some tickets to</SubTitle>
      <DetailedEventInfo event={event}/>
      <TicketAmount 
      info={event.price}
      event={event}
      numOfTickets={numOfTickets}
      setNumOfTickets={setNumOfTickets}
      />
      <StyledButton text={text} handleClick={handleAddToCart}/>
    </DetEventPageWrapper>
  )
}

export default DetailedEventPage