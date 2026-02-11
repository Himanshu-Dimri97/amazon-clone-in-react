import React from 'react'
import { Menu } from "lucide-react";

const NavbarBanner = () => {
    return (
        <div className='flex justify-around bg-[#232f3e] h-10'>
            <div className='flex pt-2 border border-transparent hover:border hover:border-white'>
                <Menu className='text-white' size={20} />
                <p className='text-white px-1 font-bold text-sm'>All</p>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>MX Player</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>Sell</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>Bestsellers</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>Today's Deals</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>Mobiles</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>Customer Service</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>New Releases</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>Fashion</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>Electronics</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>Amazon Pay</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>Home & Kitchen</a>
            </div>
            <div className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                <a className='p-1' href='#'>Computers</a>
            </div>
        </div>
    )
}

export default NavbarBanner