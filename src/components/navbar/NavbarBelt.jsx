import React from 'react'
import { MapPin, Search, ShoppingCart } from "lucide-react";

const NavbarBelt = () => {
    return (
        <div className='flex justify-evenly gap-2 bg-[#131921] h-15 p-1'>
            <div className='flex px-1 pt-3 border border-transparent hover:border hover:border-white'>
                <img src='assets/amazon_logo.png' className='h-10 width-[100px]' />
                <span className='text-white text-sm pt-1'>.in</span>
            </div>
            <div className='px-1 pt-2 border border-transparent hover:border hover:border-white'>
                <p className='text-[12px] text-white pl-5'>Delivering to New Delhi 110020</p>
                <div className='flex'>
                    <MapPin className="w-4.5 h-4.5 text-white" />
                    <p className='text-sm font-bold text-white'>Update Location</p>
                </div>
            </div>
            <div class="flex">
                <select name="select" className='bg-[#e6e6e6] text-[#555] text-sm p-2 my-1.5 rounded-l-lg border-[#e6e6e6]'>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                </select>
                <input name="input" className='bg-white border-[#e6e6e6] font-semibold text-md text-[#555] w-120 my-1.5 p-2' placeholder="Search Amazon.in" />
                <button className='bg-[#febd69] w-12 flex justify-center p-2.5 my-1.5 rounded-r-lg'><Search className="w-5.5 h-5.5 text-black" /></button>
            </div>
            <div className='flex align-center gap-1 px-1 pt-4 border border-transparent hover:border hover:border-white'>
                <img src='assets/india.svg' className='h-5 w-5' />
                <span className='pl-1 text-sm font-bold text-white'>En</span>
                <div className="w-0 h-0 mt-2
                               border-l-4 border-l-transparent
                               border-r-4 border-r-transparent
                               border-t-[5px] border-t-[#e6e6e6]">
                </div>
            </div>
            <div className='px-1 pt-1 border border-transparent hover:border hover:border-white'>
                <span className='text-white text-[12px]'>Hello, sign in</span>
                <div className='flex items-center gap-1'>
                    <span className='text-white text-sm font-bold leading-none'>Account & Lists</span>
                    <div className="w-0 h-0
                               border-l-4 border-l-transparent
                               border-r-4 border-r-transparent
                               border-t-[5px] border-t-[#e6e6e6]">
                    </div>
                </div>

            </div>
            <div className='px-1 pt-1 border border-transparent hover:border hover:border-white'>
                <span className='text-white text-[12px]'>Return</span>
                <p className='text-white text-sm font-bold leading-none'>& Orders</p>
            </div>
            <div className='flex items-center gap-1 px-1 pt-1 border border-transparent hover:border hover:border-white'>
                <div>
                    <span className='text-[#f08804] text-sm font-bold pl-1.5'>0</span>
                    <ShoppingCart className='text-white font-extrabold' size={20} />
                </div>
                <span className='text-white font-bold text-md'>Cart</span>
            </div>
        </div>
    )
}

export default NavbarBelt