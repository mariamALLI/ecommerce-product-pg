import { useCart } from "../../hooks/useCart";
import Icondelete from "../../assets/images/icondelete.svg";

export default function CartModal({open, onClose}: {open:boolean, onClose: () => void}) {
    const {items, removeItem} = useCart();


    if (!open) return null;

    return(
       <div className="fixed top-16 right-4 md:right-12 bg-white rounded-xl shadow-xl z-50 w-80 max-w-full" onClick={onClose}>
            <div className="p-4 border-b font-bold">Cart</div>
            <div className="p-4">
                {items.length === 0 ? (
                    <div className="text-gray-500 text-center py-10">Your cart is empty.</div>

                ):(
                    <>
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-2 mb-4">
                            <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg"/>

                            <div className="flex-1">
                                <div className="text-sm font-semibold">{item.title}</div>
                                 <div className="text-sm">
                                    ${item.price.toFixed(2)} x {item.quantity}<b>${(item.price * item.quantity).toFixed(2)}</b>
                                </div>
                            </div>
                            <button 
                            onClick={() => removeItem(item.id)}  
                            className="text-gray-400 hover:text-red-500 text-xl"
                            aria-label={`Remove ${item.title} from cart`}
                            >
                               <img src={Icondelete} alt={`Remove ${item.title} from cart`} className="w-4 h-4" /> 
                            </button>
                        </div>
                    ))}
                    <button className="w-full bg-orange-500 text-white font-bold rounded-lg py-3 mt-2">
                        Checkout
                    </button>
                </>
            )
        }

            </div>
       </div> 
    )
}