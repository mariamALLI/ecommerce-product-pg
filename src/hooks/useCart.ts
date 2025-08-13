import { useContext } from "react";
import { createContext } from "react";
import type { CartContextType } from "../context/cartcontext";

export const CartContext = createContext<CartContextType | undefined>(undefined);
export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
}