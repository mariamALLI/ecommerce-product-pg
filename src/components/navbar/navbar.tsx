import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from '../ui/button';
import {motion } from "framer-motion";
import { useState } from "react";
import logo from '../../assets/images/logo.svg'
import { Avatar, AvatarImage,AvatarFallback } from "../ui/avatar";
import ImageAvatar from '../../assets/images/imageavatar.png'



const NAV_LINK: { label: string; href: string }[] = [
    {label: 'Collections', href: '#collections'},
    {label: 'Men', href: '#men'},
    {label: 'Women', href: '#women'},
    {label: 'About', href: '#about'},
    {label: 'Contact', href: '#contact'},
]


export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    // const [itemCount, setItemCount] = useState<number>(0);

   

    return(
        <nav className="w-[95%] md:w-[80%] mx-auto p-4 bg-white">

            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                {/* Mobile Menu Button */}
                   <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setMobileOpen(true)} aria-label="Menu">
                          <Menu className="h-8 w-8 ml-[-3rem]" />
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
                       <span className="absolute top-2 right-2 bg-orange-500 text-white rounded-full px-1 text-xs">
                            {0}
                       </span>
                   </Button>

                   {/* Avatar/Profile */}
                   <Avatar className="cursor-pointer hover:text-orange-500">
                       <AvatarImage src={ImageAvatar} alt="User Avatar" />
                       <AvatarFallback>U</AvatarFallback>
                   </Avatar>
                    
                 
                </div>
                
            </div>
            <hr className="hidden sm:block border-gray-200 mb-4" />
            {/* Mobile Nav Drawer */}
            {
                mobileOpen && (
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
                     initial={{right: '100%'}}
                     animate={{right: '35%'}}
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
                    </>
            )}
        </nav>
    );
}
