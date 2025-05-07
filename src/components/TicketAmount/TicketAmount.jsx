import React from 'react';
import useCartStore from '../../store/useCartStore';
import styled from 'styled-components';

const TicketWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${(props) => props.variant === 'detailed' ? '230px' : '310px'};
  height: ${(props) => props.variant === 'detailed' ? '130px' : '96px'};
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
  align-items: left;
`

const TicketInfoDetPage = styled.p`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #F56B9A;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  text-shadow: 1px 1px 0 #F56B9A;
  padding: 1rem;
`
const TicketSelectAmount = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  gap: ${(props) => props.variant === 'detailed' ? '0': '1rem'};
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
  min-width: ${(props) => props.variant === 'detailed' ? '100px' : '125px'};
  line-height: 1;
  font-size: 28px;
  font-weight: 400;
  background-color: transparent;
  padding: ${(props) => props.variant === 'detailed' ? '2px 2rem 0 2rem' : '2px 3rem 0 3rem'};
  border-left: 1px solid #F56B9A;
  border-right: 1px solid #F56B9A;
  text-align: ${(props) => props.variant === 'detailed' && 'center'};
  padding-top: ${(props) => props.variant === 'detailed' && '.7rem'};
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
    <TicketWrapper variant='detailed'>
      <TicketInfoDetPage>{info * numOfTickets}</TicketInfoDetPage>
      <TicketSelectAmount variant='detailed'>
        <OrderAddDecreaseButton onClick={() => setNumOfTickets (prev => Math.max(prev - 1, 0))}>-</OrderAddDecreaseButton>
        <TicketQty variant='detailed'>{numOfTickets}</TicketQty> 
        <OrderAddDecreaseButton onClick={() => setNumOfTickets (prev => prev + 1)}>+</OrderAddDecreaseButton>
      </TicketSelectAmount>
    </TicketWrapper>
  );
}

export default TicketAmount