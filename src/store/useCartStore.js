import { create } from "zustand"

const useCartStore = create((set) => ({
    cart: [],
    boughtTickets: [],
    addToCart: (newTicket) => set((state) => {
        const existing = state.cart.find(ticket => ticket.id === newTicket.id);
        if (existing) {
          return {
            cart: state.cart.map(ticket =>
              ticket.id === newTicket.id
                ? { ...ticket, quantity: ticket.quantity + newTicket.quantity }
                : ticket
            )
          };
        }
        return {
          cart: [...state.cart, newTicket]
        };
      }),

    removeFromCart: (uid) => set((state) => ({ 
        cart: state.cart.filter(ticket => ticket.uid !== uid)})),

    clearCart: () => set(() => ({cart: []})),

    updateQuantity: (uid, newQty) =>
        set((state) => ({
          cart: state.cart.map(ticket =>
            ticket.uid === uid ? { ...ticket, quantity: newQty } : ticket
          )
        })),

    addToBoughtTickets: (cart) => 
        set((state) => {
            const allTickets = []

            cart.forEach((ticket) => {
                const section = ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)];
                const startSeat = Math.floor(Math.random() * 100) + 1;

                for(let i = 0; i < ticket.quantity; i++) {
                    allTickets.push({
                        ...ticket,
                        uid: crypto.randomUUID(),
                        section,
                        seat: startSeat + i,
                    })
                }
            })
            return {
                boughtTickets: [...state.boughtTickets, ...allTickets]
            } 
        }),
    }))

export default useCartStore