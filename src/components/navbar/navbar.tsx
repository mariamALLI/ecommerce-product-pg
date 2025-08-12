import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from '../ui/button';
import {motion } from "framer-motion";
import { useState } from "react";
import logo from '../../assets/images/logo.svg'
import { Avatar, AvatarImage,AvatarFallback } from "../ui/avatar";
import ImageAvatar from '../../assets/images/imageavatar.png'



const NAV_LINK = [
    {label: 'Collections', href: '#collections'},
    {label: 'Men', href: '#men'},
    {label: 'Women', href: '#women'},
    {label: 'About', href: '#about'},
    {label: 'Contact', href: '#contact'},
]


export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return(
        <nav className="w-full bg-white shadow-sm">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                {/* Mobile Menu Button */}
                   <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setMobileOpen(true)} aria-label="Menu">
                          <Menu className="h-6 w-6" />
                   </Button>
                {/* logo */}
                <img className="ml-[-5rem] md:ml-0" src={logo} alt="Logo" />

                {/* desktop nav */}
                <ul className="hidden md:flex gap-8 items-center">
                    {/* nav links */}
                   {
                    NAV_LINK.map( link => (
                    <li key={link.label}>
                        <a href={link.href} className="text-gray-600 hover:text-gray-900">
                            {link.label}
                        </a>
                    </li>

                    ))
                   }
                </ul>

                {/* icons */}
                <div className="flex items-center gap-6">
                   {/* cart */}
                   <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
                       <ShoppingCart className="h-6 w-6" />
                       {/* cart item count */}
                       {/* <span className="absolute top-2 right-2 bg-orange-500 text-white rounded-full px-1 text-xs">
                           3
                       </span> */}
                   </Button>

                   {/* Avatar/Profile */}
                   <Avatar>
                       <AvatarImage src={ImageAvatar} alt="User Avatar" />
                       <AvatarFallback>U</AvatarFallback>
                   </Avatar>
                    
                 
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            {
                mobileOpen && (
                    <motion.div
                     initial={{right: '100%'}}
                     animate={{right: 0}}
                     exit={{right: '100%'}}
                     className="fixed inset-0 bg-white z-30 p-6 flex flex-col gap-8 md:hidden"
                >
                    <button 
                    className="self-start mb-4"
                    aria-label="close menu"
                    onClick={() => setMobileOpen(false)}
                    >
                        <X aria-label="close menu" className="h-6 w-6 rotate-90" />
                    </button>

                    {NAV_LINK.map(link => (
                            <a 
                                key={link.label}
                                href={link.href} 
                                className="text-lg font-medium text-gray-700 hover:text-black"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                    ))}
                    </motion.div>
            )}
        </nav>
    );
}
