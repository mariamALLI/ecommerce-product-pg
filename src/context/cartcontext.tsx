import { useState } from "react";
import type { ReactNode } from "react";


// Import the Cart Context from separate file
import { CartContext } from "../hooks/useCart";


// Cart Item Type
type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

// Cart Context Type
export type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};




export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    // Add item to cart 
    function addItem(item: CartItem){
        setItems((prevItems) => {
            const existingItem = prevItems.find(indx => indx.id === item.id);
            if(existingItem) {
                return prevItems.map(indx => indx.id === item.id ? { ...indx, quantity: indx.quantity + item.quantity } : indx);
            }
            return [...prevItems, { ...item, quantity: item.quantity }];
        })
    }

    // Remove item from cart
    function removeItem(id: string) {
        setItems((prevItems) => prevItems.filter(item => item.id !== id));
    }

    // Clear cart
    function clearCart() {
        setItems([]);
    }

    // Context value
    const value = {
        items,
        addItem,
        removeItem,
        clearCart
    };

    return( 
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
    );
}
