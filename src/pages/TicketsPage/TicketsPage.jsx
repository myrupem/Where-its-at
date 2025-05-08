import TicketsList from "../../components/TicketsList/TicketsList"
import useCartStore from "../../store/useCartStore"
import styled from "styled-components"


const PageWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #da4ca8 0%, #231F42 30%);
`

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
      <PageWrapper>
        <NoTicketsWrapper> 
          <NoTickets>You haven't bought any tickets yet!</NoTickets>
        </NoTicketsWrapper>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <TicketsList />
    </PageWrapper>
 )
}

export default TicketsPage