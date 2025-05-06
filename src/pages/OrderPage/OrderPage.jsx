import StyledButton from '../../components/Button/Button'
import CartList from '../../components/CartList/CartList'
import useCartStore from '../../store/useCartStore'
import { useNavigate } from 'react-router-dom'

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
    <>
      <h1>Order</h1>
      {cart.length === 0 ? (
        <p>You have nothing in your cart yet!</p>
      ) : (
        <>
          <p>You are about to score some tickets to</p>
          <CartList />
          <p>Total for your order</p>
          <p>{calculateTotal()} sek</p>
          <StyledButton handleClick={handleSendOrder} text={btnText} />
        </>
      )}
    </>
  )
}

export default OrderPage