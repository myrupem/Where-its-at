import Button from '../../components/Button/Button'
import CartList from '../../components/CartList/CartList'

function OrderPage() {
    const btnText = 'Checkout/Order'

  return (
    <> 
        <h1>Order</h1>
        <CartList />
        <p>Total for your order</p>
        <p>total amout of the order</p>
        <Button text={btnText} />
    </>
  )
}

export default OrderPage