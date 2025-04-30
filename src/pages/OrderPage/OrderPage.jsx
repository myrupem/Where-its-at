import Button from '../../components/Button/Button'
import CartList from '../../components/CartList/CartList'
import useCartStore from '../../store/useCartStore'

function OrderPage() {
    const btnText = 'Checkout/Order'
    const cart = useCartStore((state) => state.cart)
    const addToCart = useCartStore((state) => state.addToCart)

  function handleClick() {
    
    addToCart(tickets)
  }

  return (
    <> 
        <h1>Order</h1>
        <CartList />
        <p>Total for your order</p>
        <p>total amout of the order</p>
        <Button handleClick={handleClick} text={btnText} />
    </>
  )
}

export default OrderPage