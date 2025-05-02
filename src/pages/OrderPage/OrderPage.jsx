import Button from '../../components/Button/Button'
import CartList from '../../components/CartList/CartList'
import useCartStore from '../../store/useCartStore'

function OrderPage() {
    const btnText = 'Checkout/Send Order'
    const cart = useCartStore((state) => state.cart)
    const addToBoughtTickets = useCartStore((state) => state.addToBoughtTickets)
    const clearCart = useCartStore((state) => state.clearCart)

    function calculateTotal() {
      return cart.reduce((total, ticket) => {
        return total + ticket.price * ticket.quantity;
      }, 0);
    }

  function handleSendOrder() {
    if(cart.length === 0) return;
    addToBoughtTickets(cart)
    clearCart()
  }

  return (
    <> 
        <h1>Order</h1>
        <CartList />
        <p>Total for your order</p>
        <p>{calculateTotal()} sek</p>
        <Button handleClick={handleSendOrder} text={btnText} />
    </>
  )
}

export default OrderPage