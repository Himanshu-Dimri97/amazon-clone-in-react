import logo from "../../assets/amazon_logo.png";
import india from "../../assets/india.svg";
import { MapPin, Search, ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button";

const NavbarBelt = () => {
    const { cart } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);
    console.log(user);

    return (
        <div className='flex justify-evenly gap-2 bg-[#131921] h-15 p-1'>
            <Link to={'/'} className='flex px-1 pt-3 border border-transparent hover:border hover:border-white'>
                <img src={logo} className='h-10 width-[100px]' />
                <span className='text-white text-sm pt-1'>.in</span>
            </Link>
            <div className='px-1 pt-2 border border-transparent hover:border hover:border-white cursor-pointer'>
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
                <img src={india} className='h-5 w-5' />
                <span className='pl-1 text-sm font-bold text-white'>En</span>
                <div className="w-0 h-0 mt-2
                               border-l-4 border-l-transparent
                               border-r-4 border-r-transparent
                               border-t-[5px] border-t-[#e6e6e6]">
                </div>
            </div>

            {
                user ? (
                    <div className="relative group px-1 pt-4.5 border border-transparent
                                   group-hover:border-white
                                   group-hover:border-t-[#131921]">

                        <div className='flex items-center gap-1 cursor-pointer'>
                            <span className='text-[#f08804] text-sm font-bold leading-none'>
                                Hello, {user?.name?.split(" ")[0]}
                            </span>

                            <div className="w-0 h-0
                                    border-l-4 border-l-transparent
                                    border-r-4 border-r-transparent
                                    border-t-[5px] border-t-[#e6e6e6]">
                            </div>
                        </div>

                        <div className="absolute hidden group-hover:block right-0 mt-3 bg-white text-black rounded shadow-lg">
                            <div className="absolute right-3 -top-2 w-0 h-0
                                            border-l-8 border-l-transparent
                                            border-r-8 border-r-transparent
                                            border-b-8 border-b-white">
                            </div>
                            <div className="flex justify-center items-center w-40 h-20 ">
                                <Button onClick={logout} text={"Logout"} className="w-20! h-12 bg-red-500 hover:bg-red-600" />
                            </div>
                        </div>

                    </div>
                )
                    :
                    (
                        <div className='relative group px-1 pt-1 border border-transparent cursor-pointer
                                      group-hover:border-white
                                      group-hover:border-t-[#131921]'>

                            <span className='text-white text-[12px]'>Hello, sign in</span>

                            <div className='flex items-center gap-1'>
                                <span className='text-white text-sm font-bold leading-none'>
                                    Account & Lists
                                </span>

                                <div className="w-0 h-0
                                                border-l-4 border-l-transparent
                                                border-r-4 border-r-transparent
                                                border-t-[5px] border-t-[#e6e6e6]">
                                </div>
                            </div>
                            <div className="absolute hidden group-hover:block right-0 top-full pt-3 z-50">

                                <div className="absolute right-4 -top-1 w-0 h-0
                                                border-l-8 border-l-transparent
                                                border-r-8 border-r-transparent
                                                border-b-8 border-b-white">
                                </div>

                                <div className="bg-white w-56 rounded shadow-xl p-4">

                                    <div className="flex flex-col gap-3">
                                        <Link to="/login">
                                            <Button text={"Login"} className="bg-yellow-400 hover:bg-yellow-500 text-black!" />
                                        </Link>
                                        <Link to="/signup">
                                            <Button text={"Signup"} className="bg-white text-black! border border-gray-300 hover:bg-gray-100" />
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )
            }
            <div className='px-1 pt-1 border border-transparent hover:border hover:border-white cursor-pointer'>
                <span className='text-white text-[12px]'>Return</span>
                <p className='text-white text-sm font-bold leading-none'>& Orders</p>
            </div>
            <div className='flex items-center gap-1 px-1 pt-1 border border-transparent hover:border hover:border-white'>
                <Link to={"/cart"}>
                    <span className='text-[#f08804] text-sm font-bold pl-1.5'>  {cart.length}</span>
                    <ShoppingCart className='text-white font-extrabold' size={20} />
                </Link>
                <Link to={"/cart"}>
                    <span className='text-white font-bold text-md'>Cart</span>
                </Link>
            </div>
        </div>
    )
}

export default NavbarBelt