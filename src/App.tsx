import Navbar from "./components/navbar/navbar"
import ProductCard from "./components/product/productCard"
import { CartProvider } from "./context/cartcontext"

function App() {
  return (
   <CartProvider>
     <div className="App w-full bg-white">
           <Navbar />
       <ProductCard />
       {/* Other components can be added here */}
     </div>
   </CartProvider>
  )
}

export { App }