import NameNPlace from "../NameNPlace/NameNPlace"
import TicketAmount from "../TicketAmount/TicketAmount"
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";

const ListCart = styled.section`
display: flex;
flex-direction: column;
padding: 1rem;
margin-top: 5rem;
`

function CartList() {
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  console.log("Cart contents:", cart);

  return (
    <ListCart> 
      {cart.map((event) => (
      <TicketAmount 
      key={event.uid} 
      info={<NameNPlace event={event} />} 
      event={event}
      numOfTickets={event.quantity}
      setNumOfTickets={(newQty) => updateQuantity(event.uid, newQty)}
      />
    ))}
    </ListCart>
  )
}

export default CartList