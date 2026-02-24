import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts, getSubcategories } from "../api/api";

const ProductPage = () => {
    const { slug } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        getSubcategories().then((subs) => {
            const matched = subs.find((s) => s.slug === slug);
            console.log(matched);
            if (matched) {
                getProducts(matched.id).then(setProducts);
                setLoading(false);
            } else {
                setProducts([]);
                setLoading(false);
            }
        });
    }, [slug]);

    if (loading) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">

                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                <p className="mt-4 text-lg text-gray-600">
                    Loading your order...
                </p>

            </div>
        );
    }

    return (
        <div>

            <div className="relative">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-linear-to-r from-[#ffff] to-transparent z-10"></div>
                <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-linear-to-l from-[#ffff] to-transparent z-10"></div>

                <div className="flex gap-10 px-5 h-10 overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
                    {options.map((option, index) => (
                        <Link to="#" key={index} className="pt-4">
                            <div className="text-xs text-[#333]">{option.name}</div>
                        </Link>
                    ))}
                </div>

            </div>


            <div className="flex p-5 w-full">

                <div className="w-30% sm:w-[25%] lg:w-[15%] border-r-2 border-r-[#ddd]">
                    <h3 className="text-sm font-bold text-black mb-2">Category</h3>
                    <div className="text-sm text-[#0f1111] font-normal">
                        <Link to={"/"} className="flex leading-none mb-1.5 hover:text-[#c45500]">
                            <ChevronLeft className="h-4 w-4" />
                            <div>Electronics</div>
                        </Link>
                        <div className="font-bold ">
                            <div className="pl-3.5 mb-1.5">Mobiles & Accessories</div>
                        </div>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[70%] sm:w-[75%] lg:w-[85%] mx-auto gap-6 p-6">
                    {products.length > 0 ? (
                        products.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))
                    ) : (
                        <div className="text-gray-500">No products found</div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default ProductPage;
