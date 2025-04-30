import { create } from "zustand"

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (newTicket) => set((state) => ({ 
        cart: [...state.cart, newTicket] })),
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(ticket => ticket.id !== id)})),
    clearCart: () => set(() => ({cart: []})) 
}))

export default useCartStore