import StyledButton from '../../components/Button/Button'
import CartList from '../../components/CartList/CartList'
import useCartStore from '../../store/useCartStore'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const OrderPageWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
font-family: 'Fira Sans';
`

const OrderPageTitle = styled.h1`
font-family: 'Sansita One';
font-size: 32px;
font-weight: 400;
color: #F56B9A;
position: absolute;
top: 5%;
`

const TotalText = styled.p`
font-size: 19px;
font-weight: 400;
font-style: italic;
padding-top: 1rem;
`

const TotalAmount = styled.p`
font-size: 32px;
font-weight: 700;
text-shadow: 1px 1px 0px #F56B9A;
margin: 1rem;
`

const NoTicketsYet = styled.p`
align-items: center;
text-align: center;
padding: 0 0 18rem 0;
margin: 8rem 0 5rem 0;
font-family: 'Sansita One';
font-weight: 400;
font-size: 20px;
color: #F56B9A;
`

function OrderPage() {
    const btnText = 'Checkout/Send Order'
    const cart = useCartStore((state) => state.cart)
    const addToBoughtTickets = useCartStore((state) => state.addToBoughtTickets)
    const clearCart = useCartStore((state) => state.clearCart)
    const navigate = useNavigate()

    function calculateTotal() {
      return cart.reduce((total, ticket) => {
        return total + ticket.price * ticket.quantity;
      }, 0);
    }

  function handleSendOrder() {
    if(cart.length === 0) return;
    addToBoughtTickets(cart)
    clearCart()
    navigate('/tickets')
  }

  return (
    <OrderPageWrapper>
      <OrderPageTitle>Order</OrderPageTitle>
      {cart.length === 0 ? (
        <NoTicketsYet>You have nothing in your cart yet!</NoTicketsYet>
      ) : (
        <>
          <CartList />
          <TotalText>Total for your order</TotalText>
          <TotalAmount>{calculateTotal()} sek</TotalAmount>
          <StyledButton handleClick={handleSendOrder} text={btnText} />
        </>
      )}
    </OrderPageWrapper>
  )
}

export default OrderPage