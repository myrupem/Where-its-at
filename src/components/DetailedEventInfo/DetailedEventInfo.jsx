import NameNPlace from "../NameNPlace/NameNPlace"
import styled from "styled-components"

const DetailedWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Where = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
`

function DetailedEventInfo({ event }) {

  return (
      <DetailedWrapper> 
        <NameNPlace event={event}/>
        <Where>@ {event.where}</Where>
      </DetailedWrapper>
  )
}

export default DetailedEventInfo