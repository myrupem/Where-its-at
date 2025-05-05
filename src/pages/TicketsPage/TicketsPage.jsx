import TicketsList from "../../components/TicketsList/TicketsList"
import useCartStore from "../../store/useCartStore"

function TicketsPage() {
  const boughtTickets = useCartStore((state) => state.boughtTickets)

  if (!boughtTickets || boughtTickets.length === 0) {
    return <p>You haven't bought any tickets yet!</p>
  }

  return (
    <section>
      <TicketsList />
    </section>
 )
}

export default TicketsPage