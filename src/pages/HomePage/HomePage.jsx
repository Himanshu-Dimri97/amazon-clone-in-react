import ProductCard from "./ProductCard";
import FullscreenSlider from './FullscreenSlider'
// import { products } from "./productCardData";
import { getMobileProducts } from "../../api/api";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getMobileProducts().then(setProducts);
    }, [])
    // console.log(products)
    return (
        <div className='bg-[#E3E6E6] pb-8'>
            <FullscreenSlider />

            <div className="flex justify-evenly pt-6">
                {
                    products.slice(0, 4).map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))
                }
            </div>

        </div>
    )
}

export default HomePage