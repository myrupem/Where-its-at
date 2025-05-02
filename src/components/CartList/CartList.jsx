import NameNPlace from "../NameNPlace/NameNPlace"
import TicketAmount from "../TicketAmount/TicketAmount"
import useCartStore from "../../store/useCartStore";

function CartList() {
  const cart = useCartStore((state) => state.cart);
  console.log("Cart contents:", cart);

  return (
    <> 
      {cart.map((event) => (
      <TicketAmount key={event.uid} info={<NameNPlace event={event} />} event={event} />
    ))}
    </>
  )
}

export default CartList