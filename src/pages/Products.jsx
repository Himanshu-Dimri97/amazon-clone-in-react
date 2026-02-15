import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { products } from "../data/ProductData";
import ProductCard from "../components/ProductCard"

const Products = () => {
    const options = [
        { name: "Mobiles & Accessories" },
        { name: "Laptops & Accessories" },
        { name: "Tv & Home Entertainment" },
        { name: "Audio" },
        { name: "Cameras" },
        { name: "Computer Peripherals" },
        { name: "Smart Technology" },
        { name: "Musical Instruments" },
        { name: "Office & Stationery" },
    ];

    return (
        <div>
            <div className="flex justify-evenly gap-3 bg-white h-12 shadow border-b-[#333]">
                {
                    options.map((option, index) => {
                        return (
                            <Link to={"/"} key={index} className="pt-4">
                                <div className="text-xs text-[#333]">{option.name}</div>
                            </Link>
                        )
                    })
                }

            </div>
            <div className="flex p-5 w-full">
                <div className="w-[15%] border-r-2 border-r-[#ddd]">
                    <h3 className="text-sm font-bold text-black mb-2">Category</h3>
                    <div className="text-sm text-[#0f1111] font-normal">
                        <Link to={"/"} className="flex leading-none mb-1.5 hover:text-[#c45500]"><ChevronLeft className="h-4 w-4" /><div>Electronics</div></Link>
                        <div to={"/"} className="font-bold "><div className="pl-3.5 mb-1.5">Mobiles & Accessories</div></div>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="pl-6 mb-1.5">Mobiles Accessories</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="pl-6 mb-1.5">Mobiles  Broadband Devices</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="pl-6 mb-1.5">Smartphones & Basic Mobiles</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="pl-6 mb-1.5">Smartwatches</div></Link>
                    </div>
                    <h3 className="text-sm font-bold text-black mt-4 mb-2">Price</h3>
                    <div className="text-sm text-[#0f1111] font-normal">
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">Under ₹1,000</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">₹1,000 - ₹5,000</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">₹5,000 - ₹10,000</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">₹10,000 - ₹20,000</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">Over ₹20,000</div></Link>
                    </div>
                    <h3 className="text-sm font-bold text-black mt-4 mb-2">Discount</h3>
                    <div className="text-sm text-[#0f1111] font-normal">
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">10% Off or more</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">25% Off or more</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">35% Off or more</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">50% Off or more</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">60% Off or more</div></Link>
                        <Link to={"/"} className="hover:text-[#c45500]"><div className="mb-1.5">70% Off or more</div></Link>
                    </div>
                </div>
                <div className="grid grid-cols-3 w-[85%] gap-6 p-6">

                    {products.map((item) => (
                        <Link to={"/"}>
                            <ProductCard key={item.id} product={item} />
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Products


