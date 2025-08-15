import { Menu, ShoppingCart, X } from 'lucide-react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.svg'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import ImageAvatar from '../../assets/images/imageavatar.png'
import { Skeleton } from '../ui/skeleton'

// Import Cart Modal & useCart hook
import CartModal from '../cartModal/cartModal'
import { useCart } from '../../hooks/useCart'

const NAV_LINK: { label: string; href: string }[] = [
  { label: 'Collections', href: '#collections' },
  { label: 'Men', href: '#men' },
  { label: 'Women', href: '#women' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const { items } = useCart()

  useEffect(function () {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <nav className="w-[95%] md:w-[80%] mx-auto p-4 bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Mobile Menu Button */}
        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(true)}
          aria-label="Menu"
        >
          <Menu className="h-8 w-8 ml-[-3rem]" />
        </Button>
        {/* logo */}
        <img className="ml-[-5rem] md:ml-0" src={logo} alt="Logo" />

        {/* desktop nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {/* nav links */}
          {loading ? (
            <>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </>
          ) : (
            NAV_LINK.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
                  relative
                  pb-2
                  text-darkGrayishBlue
                  hover:text-veryDarkBlue
                  transition-colors
                  after:content-['']
                  after:absolute
                after:left-0
                after:bottom-[-1rem]
                after:h-1
                after:w-full
                after:bg-orange
                after:scale-x-0
                after:transition-transform
                after:origin-left
                hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))
          )}
        </ul>

        {/* icons */}
        <div className="flex items-center gap-6">
          {/* cart */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cart"
            className="relative"
            onClick={() => setCartOpen((open) => !open)}
          >
            {loading ? (
              <Skeleton className="h-8 w-8 rounded" />
            ) : (
              <ShoppingCart className="h-8 w-8" />
            )}

            {/* cart item count */}
            {!loading && items.length > 0 && (
              <span className="absolute top-1 right-1 bg-orange text-xs rounded-full px-1 text-white font-bold">
                {items.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            )}
          </Button>
          {/* Cart Modal */}
          {loading ? (
            <Skeleton className="h-96 w-full rounded" />
          ) : (
            cartOpen && <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
          )}

          {/* Avatar/Profile */}
          {loading ? (
            <Skeleton className="h-10 w-10 rounded-full" />
          ) : (
            <Avatar className="cursor-pointer border hover:border-orange cursor-pointer">
              <AvatarImage src={ImageAvatar} alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
      <hr className="hidden sm:block border-gray-200 mb-4" />
      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 z-20"
            onClick={() => setMobileOpen(false)} // Optional: close menu when overlay clicked
          />

          {/* Mobile Nav Drawer */}
          <motion.div
            initial={{ right: '100%' }}
            animate={{ right: '35%' }}
            exit={{ right: '100%' }}
            className="fixed inset-0 bg-white z-30 p-6 flex flex-col gap-8 md:hidden"
          >
            <button
              className="self-start mb-4"
              aria-label="close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X aria-label="close menu" className="h-6 w-6" />
            </button>

            {NAV_LINK.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative
                    text-lg
                    font-semibold
                    pb-2
                    text-darkGrayishBlue
                    hover:text-veryDarkBlue
                    transition-colors
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:bottom-[-1rem]
                    after:h-1
                    after:w-full
                    after:bg-orange 
                    after:scale-x-0
                    after:transition-transform
                    after:origin-left
                    hover:after:scale-x-100"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </>
      )}
    </nav>
  )
}
