import NameNPlace from "../NameNPlace/NameNPlace"
import TicketAmount from "../TicketAmount/TicketAmount"
import useCartStore from "../../store/useCartStore";

function CartList() {
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  console.log("Cart contents:", cart);

  return (
    <> 
      {cart.map((event) => (
      <TicketAmount 
      key={event.uid} 
      info={<NameNPlace event={event} />} 
      event={event}
      numOfTickets={event.quantity}
      setNumOfTickets={(newQty) => updateQuantity(event.uid, newQty)}
      />
    ))}
    </>
  )
}

export default CartList