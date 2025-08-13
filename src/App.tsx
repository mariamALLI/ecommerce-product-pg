import Navbar from "./components/navbar/navbar"
import ProductCard from "./components/product/productCard"

function App() {
  return (
   <div className="App w-full bg-white">
     <Navbar />
     <ProductCard />
     {/* Other components can be added here */}
   </div>
  )
}

export { App }