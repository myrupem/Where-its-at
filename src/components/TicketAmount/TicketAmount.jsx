import React from 'react';
import useCartStore from '../../store/useCartStore';
import styled from 'styled-components';

const TicketWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 310px;
  height: 96px;
  color: #FFFFFF;
  border: 2px solid #F56B9A;
  border-radius: 3px;
  margin: .4rem;
  font-family: 'Fira Sans';
`

const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #F56B9A;
  justify-content: center;
  align-items: center;
`
const TicketSelectAmount = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
  border-bottom: 1px solid #F56B9A;
`
const OrderAddDecreaseButton = styled.button`
all: unset;
width: 100px;
height: 100%;
text-align: center;
font-weight: 100;
font-size: 28px;
align-items: center;
justify-content: center;
cursor: pointer;
`

const TicketQty = styled.p`
  margin: 0;
  line-height: 1;
  font-size: 28px;
  font-weight: 400;
  background-color: none;
  padding: 2px 3rem 0 3rem;
  border-left: 1px solid #F56B9A;
  border-right: 1px solid #F56B9A;
`

function TicketAmount({ info, event, numOfTickets, setNumOfTickets }) {
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
          <TicketQty>{event.quantity}</TicketQty>
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