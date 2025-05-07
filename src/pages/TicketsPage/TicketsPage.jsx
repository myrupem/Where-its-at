import TicketsList from "../../components/TicketsList/TicketsList"
import useCartStore from "../../store/useCartStore"
import styled from "styled-components"

const NoTicketsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const NoTickets = styled.p`
  padding: 0 0 18rem 0;
  margin: 8rem 0 5rem 0;
  font-family: 'Sansita One';
  font-weight: 400;
  font-size: 20px;
  color: #F56B9A;
`

function TicketsPage() {
  const boughtTickets = useCartStore((state) => state.boughtTickets)

  if (!boughtTickets || boughtTickets.length === 0) {
    return (
      <NoTicketsWrapper> 
        <NoTickets>You haven't bought any tickets yet!</NoTickets>
      </NoTicketsWrapper>
    )
  }

  return (
    <section>
      <TicketsList />
    </section>
 )
}

export default TicketsPage