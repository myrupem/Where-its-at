import { create } from "zustand"

const useCartStore = create((set) => ({
    cart: [],
    boughtTickets: [],
    addToCart: (newTicket) => set((state) => ({ 
        cart: [...state.cart, newTicket] })),
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(ticket => ticket.id !== id)})),
    clearCart: () => set(() => ({cart: []})),
    addToBoughtTickets: (cart) => set((state) => ({
        boughtTickets: [...state.boughtTickets, cart] })),
    }))

export default useCartStore