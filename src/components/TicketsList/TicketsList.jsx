import Ticket from "../Ticket/Ticket"
import useCartStore from "../../store/useCartStore"
import styled from "styled-components";

const ListTickets = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

function TicketsList() {
const tickets = useCartStore((state) => state.boughtTickets)
console.log("Tickets:", tickets);

  return (
    <ListTickets> 
      {tickets.map((ticket) => (
        <Ticket key={ticket.uid} ticket={ticket} />
    ))}
    </ListTickets>
  )
}

export default TicketsList