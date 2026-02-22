import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    const finalPrice = product.price - (product.discount || 0);
    const limitChars = (text, limit) => {
        if (text.length <= limit) return text;
        return text.slice(0, limit) + "...";
    };

    return (
        <div key={product.id} className="bg-white w-[23%] p-4 rounded-md shadow">

            <h2 className="text-xl font-bold text-black mb-3">Keep Shopping For Smartphones</h2>
            <Link to={`/${product.subSlug}/${product.slug}`}>
                <div className="flex justify-center overflow-hidden">
                    <img src={selectedImage} className="h-48 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110" />
                </div>
            </Link>
            <Link to={`/${product.subSlug}/${product.slug}`}>
                <p className="mt-3 text-sm font-semibold leading-4 h-10">{limitChars(product.title, 40)}</p>
            </Link>

            <div className="flex items-center gap-2 mt-2">

                <span className="text-xl w-15 font-semibold text-black ">
                    ₹{finalPrice}
                </span>

                <span className="text-sm text-[#565959]">MRP:</span>
                <span className="line-through ">
                    ₹{product.price}
                </span>


            </div>

            <div className="flex gap-2 mt-4">
                {product.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        onClick={() => setSelectedImage(img)}
                        className={`w-16 h-16 object-contain rounded-lg cursor-pointer border
            ${selectedImage === img
                                ? "border-3 border-[#2162a1]"
                                : "border-black"
                            }`}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProductCard;
