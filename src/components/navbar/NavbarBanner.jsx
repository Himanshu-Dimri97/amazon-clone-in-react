import React from 'react'
import { Menu } from "lucide-react";
import { Link } from 'react-router-dom';

const NavbarBanner = () => {
    const options = [
        { "name": "Mx Player" },
        { "name": "Sell" },
        { "name": "Bestsellers" },
        { "name": "Today's Deal" },
        { "name": "Mobiles" },
        { "name": "Customer service" },
        { "name": "New Releases" },
        { "name": "Fashion" },
        { "name": "Electronics" },
        { "name": "Amazon Pay" },
        { "name": "Home & kitchen" },
        { "name": "Computers" },
    ]
    return (
        <div className='flex justify-around bg-[#232f3e] h-10'>
            <div className='flex pt-2 border border-transparent hover:border hover:border-white'>
                <Menu className='text-white' size={20} />
                <div className='text-white px-1 font-bold text-sm'>All</div>
            </div>
            {
                options.map((option, index) => {
                    return (
                        <Link to={'products'} className='text-white font-semibold pt-2 text-sm border border-transparent hover:border hover:border-white'>
                            <div className='px-1'>{option.name}</div>
                        </Link>

                    )
                })
            }
        </div>
    )
}

export default NavbarBanner