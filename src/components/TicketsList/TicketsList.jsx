import Ticket from "../Ticket/Ticket"
import useCartStore from "../../store/useCartStore"

function TicketsList() {
const tickets = useCartStore((state) => state.boughtTickets)
console.log("Tickets:", tickets);

  return (
    <> 
      {tickets.map((ticket) => (
        <Ticket key={ticket.uid} ticket={ticket} />
    ))}
    </>
  )
}

export default TicketsList