import NameNPlace from "../NameNPlace/NameNPlace"
import TicketAmount from "../TicketAmount/TicketAmount"

function CartList() {
  const info = NameNPlace

  return (
    <> 
        <TicketAmount info={info}/> //iterera över arrayen med cart.
    </>
  )
}

export default CartList