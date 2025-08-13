import { useState } from 'react'
import { Button } from '../ui/button'
import { ChevronRight, ChevronLeft, ShoppingCart, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import Iconminus from '../../assets/images/iconminus.svg'
import Iconplus from '../../assets/images/iconplus.svg'
// import Iconprevious from '../../assets/images/iconprevious.svg'

/*Image Import*/
import productImage1 from '../../assets/images/imageproduct1.jpg'
import productImage2 from '../../assets/images/imageproduct2.jpg'
import productImage3 from '../../assets/images/imageproduct3.jpg'
import productImage4 from '../../assets/images/imageproduct4.jpg'

// Product Images Array
const productsImgs:string[] = [productImage1, productImage2, productImage3, productImage4]

export default function ProductCard() {
  const [activeImg, setActiveImg] = useState<number>(0)
  const [showGallery, setShowGallery] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(0)

type ProductData = {
  company: string
  title: string
  description: string
  price: number
  discount: number
  oldPrice: number
}

  // Product Data
  const productData: ProductData = {
    company: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125.0,
    discount: 0.5,
    oldPrice: 250.0,
  }

  // Handlers
  const handlePrevImg = (): void => setActiveImg((prev) => (prev > 0 ? prev - 1 : prev))
  const handleNextImg = (): void =>
    setActiveImg((prev) => (prev < productsImgs.length - 1 ? prev + 1 : prev))
  const handleThumbnailClick = (index: number): void => setActiveImg(index)

  // Quantity Handlers
  const handleIncreaseQuantity = (): void => setQuantity((prev) => prev + 1)
  const handleDecreaseQuantity = (): void => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))

  return (
    <section className="w-[95%] md:w-[80%] max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 py-10 items-center">
      {/* Product Image */}
      <div className="flex flex-col items-center">
        {/* Main Image */}
        <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden group cursor-pointer">
          <motion.img
            src={productsImgs[activeImg]}
            alt="Sneakers"
            layoutId="product-image"
            className="w-full h-full object-cover transition duration-300"
            onClick={() => setShowGallery(true)}
          />

          {/* Desktop: show thumbnails below */}
          {/* <div className="md:flex mt-6 gap-5 justify-center">
                {productsImgs.map((img, indx) => (
                    <button
                    key={img}
                    className={
                        clsx("w-20 h-20 rounded-xl border-2 transition-all overflow-hidden",
                            indx === activeImg 
                            ? "border-[hsl(26, 100%, 55%)] shadow-md"
                            : "border-transparent opacity-80 hover:border-[hsl(26, 100%, 55%)] hover:opacity-100"
                        )
                    }
                    onClick={() => handleThumbnailClick(indx)}
                    aria-label={`Show image ${indx + 1}`}
                    >
                    <img
                        src={img}
                        alt={`Thumbnail ${indx + 1}`}
                        className="w-full h-full object-cover"
                    />
                    </button>
                ))}
                </div> */}
          {/* Mobile: show arrows */}
          <div className="md:hidden absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white rounded-full shadow p-2 group cursor-pointer"
              onClick={handlePrevImg}
              aria-label="Previous image"
              disabled={activeImg === 0}
            
            >
              <ChevronLeft className="h-6 w-6 text-black group-hover:text-orange-400 transition-colors duration-200" />
            </Button>
          </div>

          <div className="md:hidden absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white rounded-full shadow p-2 group cursor-pointer"
              onClick={handleNextImg}
              aria-label="Next image"
              disabled={activeImg === productsImgs.length - 1}
            >
              <ChevronRight className="h-6 w-6 text-black group-hover:text-orange-400 transition-colors duration-200" />
            </Button>
          </div>
        </div>

        {/* thumbnails below image */}
        <div className="hidden md:block mt-4 flex gap-8 justify-center">
          {productsImgs.map((img, indx) => (
            <button
              key={img}
              className={clsx(
                'w-20 h-20 rounded-xl border-2 overflow-hidden',
                indx === activeImg
                  ? 'border-orange-400 shadow-md'
                  : 'border-transparent opacity-80 hover:border-orange-400 hover:opacity-100',
              )}
              onClick={() => handleThumbnailClick(indx)}
              aria-label={`Show image ${indx + 1}`}
            >
              <img
                src={img}
                alt={`Thumbnail ${indx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-6">
        <span className="uppercase text-xs font-bold tracking-widest text-[hsl(219, 9%, 45%)]">
          {productData.company}
        </span>
        <h1 className="text-3xl text-[hsl(220, 13%, 13%)] md:text-4xl font-bold leading-snug">
          {productData.title}
        </h1>
        <p className="text-[hsl(223, 64%, 98%)] text-sm md:text-base">{productData.description}</p>

        {/* Price Section */}
        <div className="flex items-center gap-4 mt-2">
          <div className="text-2xl font-bold">${productData.price.toFixed(2)}</div>
          <span className="bg-black text-white rounded-md px-2 py-1 text-sm font-bold">
            {Math.round(productData.discount * 100)}%
          </span>
          <span className="ml-4 text-gray-400 line-through font-bold">
            ${productData.oldPrice.toFixed(2)}
          </span>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex flex-col md:flex-row gap-4 mt-2">
          {/* Quantity selector */}
          <div className="flex items-center bg-gray-100 rounded-lg px-2 py-2 w-full md:w-32 justify-between">
            <Button
            variant="ghost"
            size="icon"
            aria-label='decrease quantity'
            onClick={handleDecreaseQuantity}
            disabled={quantity === 0}
            >
                <img src={Iconminus} alt="Decrease" className="h-2 w-4" />
            </Button>
             <span className="text-xl font-semibold">{quantity}</span>
             <Button
               variant="ghost"
               size="icon"
               aria-label='increase quantity'
               onClick={handleIncreaseQuantity}
             >
               <img src={Iconplus} alt="Increase" className="h-4 w-4" />
             </Button>
          </div>

          {/* Add to cart button */}
          <Button
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold flex items-center justify-center gap-2 shadow-md">
           <ShoppingCart className="h-6 w-6" />
            Add to Cart
          </Button>
        </div>

      </div>

      {/* Gallery Modal (active state) */}
      <AnimatePresence>
        {showGallery && (
          <>
          {/* Overlay */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black"
          onClick={() => setShowGallery(false)}
          />

          {/* Modal */}
          <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
           className="fixed z-50 inset-0 flex items-center justify-center"
          >

            <div className="bg-transparent rounded-2xl shadow-xl p-6 relative max-w-lg w-full">
              {/* close button */}
              <button
                className="absolute top-[-2rem] right-3 text-white text-4xl font-bold cursor-pointer hover:text-orange-400"
                onClick={() => setShowGallery(false)}
                aria-label="Close Gallery"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Large Image */}
              <motion.img
                src={productsImgs[activeImg]}
                alt="Sneakers"
                className="w-full h-auto rounded-lg mb-4"
                layoutId="product-image"
              />

              {/* Gallery Arrows */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Previous Image"
                    onClick={handlePrevImg}
                    disabled={activeImg === 0}
                    className='bg-white rounded-full shadow p-2 cursor-pointer group'
                  >
                    <ChevronLeft className="h-6 w-6 text-black group-hover:text-orange-400 transition-colors duration-200" />
                  </Button>
              </div>

              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Next Image"
                    onClick={handleNextImg}
                    disabled={activeImg === productsImgs.length - 1}
                    className='bg-white rounded-full shadow p-2 cursor-pointer group'
                  >
                    <ChevronRight className="h-6 w-6 text-black group-hover:text-orange-400 transition-colors duration-200" />
                  </Button>
              </div>
              {/* Thumbnail section */}
              <div className="flex gap-3 mt-6 justify-center">
                  {productsImgs.map((img, index) => (
                    <button
                    key={img}
                    className={clsx(
                      "w-16 h-16 overflow-hidden rounded-xl border-2 cursor-pointer",
                      index === activeImg
                      ? "border-orange-400 shadow-md"
                      : "border-transparent opacity-80 hover:border-orange-400 hover:opacity-100"
                    )}
                    onClick={() => handleThumbnailClick(index)}
                    aria-label={`Thumbnail ${index + 1}`}
                    >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    </button>
                  ))
                  }
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
