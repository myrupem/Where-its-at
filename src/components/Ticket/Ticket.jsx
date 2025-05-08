import React from 'react'
import styled from 'styled-components'

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 311px;
  height: 450px;
  margin: 1rem;
  background-color: #FFFFFF;
  font-family: 'Fira Sans';
  border: none;
  border-radius: 3px;
  color: rgba(0, 0, 0, 0.7);
`
const WhatWhereWhen = styled.p`
  font-size: 10px;
  font-weight: 700;
  color: #000000;
  opacity: 0.4;
  text-align: left;
  margin: .3rem;
`
const Name = styled.h1`
  font-family: 'Sansita One';
  font-size: 26px;
  font-weight: 400;
  color: #F56B9A;
  margin: 1rem 0 2rem .3rem;
`
const WhereSection = styled.section`
  width: 100%;
  height: 120px;
  border-top: 1px dashed rgba(0, 0, 0, 0.4);
  border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.03);
`
const WhereText = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 1rem 0 0 1rem;
`
const WhenSection = styled.section`
  display: flex;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.06);
  border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
`
const WhenSingularSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  border-left: 1px dashed rgba(0, 0, 0, 0.4);
`
const WhenDate = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: .5rem;
`
const WhenFromTo = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: .5rem;
`
const SeatSection = styled.section`
  background-color: rgba(0, 0, 0, 0.09);
  height: 60px;
`
const SeatText = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 1rem;
`
const BarcodeSection = styled.section`
  position: relative;
  background-color: rgba(0, 0, 0, 0.12);
  height: 120px;
  text-align: center;
`
const BarcodeText = styled.p`
  font-family: 'Libre Barcode 128', Courier, monospace;
  font-size: 101px;
  font-weight: 400;
  padding: 2rem 0 1rem 0;
  color: rgba(0, 0, 0, 0.8);
`
const BarcodeSubText = styled.p`
  font-size: 12px;
  font-weight: 700;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: 10px;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.4)
`

function Ticket({ ticket }) {
  console.log(ticket)
  return (
    <TicketWrapper>
      <WhatWhereWhen>WHAT</WhatWhereWhen>
      <Name>{ticket.name}</Name>
      <WhereSection>
        <WhatWhereWhen>WHERE</WhatWhereWhen>
        <WhereText>{ticket.where}</WhereText>
      </WhereSection>
      <WhenSection>
        <WhenSingularSection>
          <WhatWhereWhen>WHEN</WhatWhereWhen>
          <WhenDate>{ticket.when.date.slice(0, 6)}</WhenDate>
        </WhenSingularSection>
        <WhenSingularSection>
          <WhatWhereWhen>FROM</WhatWhereWhen>
          <WhenFromTo>{ticket.when.from}</WhenFromTo>
        </WhenSingularSection>
        <WhenSingularSection>
          <WhatWhereWhen>TO</WhatWhereWhen>
          <WhenFromTo>{ticket.when.to}</WhenFromTo>
        </WhenSingularSection>
      </WhenSection>
      <SeatSection>
        <WhatWhereWhen>INFO</WhatWhereWhen>
        <SeatText> Section {ticket.section} - seat {ticket.seat} </SeatText>
      </SeatSection>
      <BarcodeSection>
        <BarcodeText>{ticket.uid.slice(0, 5)}</BarcodeText>
        <BarcodeSubText>#{ticket.uid.slice(0, 5).toUpperCase()}</BarcodeSubText>
      </BarcodeSection>
    </TicketWrapper>
  )
}

export default Ticket