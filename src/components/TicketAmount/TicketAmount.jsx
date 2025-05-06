import './ticketAmount.css'
import React from 'react';
import useCartStore from '../../store/useCartStore';
import styled from 'styled-components';

const TicketWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 230px;
  height: 130px;
  color: #FFFFFF;
  border: 1px solid #F56B9A;
  border-radius: 3px;
  font-family: 'Fira Sans';
`

const TicketInfo = styled.div`
  border-bottom: 1px solid #F56B9A;
  justify-content: center;
  align-items: center;
`
const TicketSelectAmount = styled.section`
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 1rem;
`
const OrderAddDecreaseButton = styled.button`
all: unset;
width: 100%;
height: 100%;
text-align: center;
font-weight: 100;
font-size: 28px;
align-items: center;
justify-content: center;
border: 1px solid #F56B9A;
cursor: pointer;
`

const TicketAmountNInfo = styled.p`
  font-size: 28px;
  font-weight: 400;
  padding: .5rem;
  background-color: none;
`

function TicketAmount({ info, event, numOfTickets, setNumOfTickets }) {

  const cart = useCartStore((state) => state.cart)
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  //Kommer från OrderPage
  if (React.isValidElement(info)) {
    return (
      <TicketWrapper>
        <TicketInfo>
          {info}
        </TicketInfo>
        <TicketSelectAmount>
          <OrderAddDecreaseButton onClick={() => updateQuantity(event.uid, Math.max(event.quantity - 1, 0))}>-</OrderAddDecreaseButton>
          <TicketAmountNInfo>{event.quantity}</TicketAmountNInfo>
          <OrderAddDecreaseButton onClick={() => updateQuantity(event.uid, event.quantity + 1)}>+</OrderAddDecreaseButton>
        </TicketSelectAmount>
      </TicketWrapper>
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