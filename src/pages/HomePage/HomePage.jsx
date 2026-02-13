import ProductCard from "./ProductCard";
import FullscreenSlider from './FullscreenSlider'
import { products } from "./productCardData";

const HomePage = () => {
    return (
        <div className='bg-[#E3E6E6] pb-8'>
            <FullscreenSlider />

            <div className="flex justify-evenly pt-6">
                {
                    products.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))
                }
            </div>

        </div>
    )
}

export default HomePage