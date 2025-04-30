import NameNPlace from "../NameNPlace/NameNPlace"
import TicketAmount from "../TicketAmount/TicketAmount"
import useCartStore from "../../store/useCartStore";

function CartList() {
  const cart = useCartStore((state) => state.cart);

  return (
    <> 
      {cart.map((event) => (
      <TicketAmount key={event.id} info={<NameNPlace event={event} />} event={event} />
    ))}
    </>
  )
}

export default CartList