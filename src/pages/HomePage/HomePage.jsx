import ProductCard from "./ProductCard";
import FullscreenSlider from "./FullscreenSlider";
import { getMobileProducts } from "../../api/api";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMobileProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

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
        <div className="bg-[#E3E6E6] pb-8">
            <FullscreenSlider />
            <div className="w-full sm:mt-85 md:mt-60 lg:mt-25">
                <div className="">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pt-6 mx-auto
            ">

                        {products.slice(0, 4).map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HomePage;