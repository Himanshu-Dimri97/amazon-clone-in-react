import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {

    const finalPrice = Math.floor(
        product.price - (product.price * product.discount) / 100
    );
    const limitChars = (text, limit) => {
        if (text.length <= limit) return text;
        return text.slice(0, limit) + "...";
    };

    console.log(limitChars(product.title, 40));
    return (
        <Link to={`/${product.subSlug}/${product.slug}`}>
            <div className="bg-white border-[#f5f5f5] h-90 p-3 mb-4 rounded shadow hover:shadow-md transition">

                <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
                    Best seller
                </span>

                <div className="h-45 flex justify-center items-center mt-2">
                    <img
                        src={product.images[0]}
                        className="h-full object-contain"
                        alt=""
                    />
                </div>

                <p className="text-sm mt-3">{
                    limitChars(product.title, 40)
                }

                </p>

                <div className="flex gap-2 mt-1 text-sm">
                    <span>{product.rating}</span>
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-gray-500">({product.reviews})</span>
                </div>

                <div className="mt-2">
                    <span className="text-xl font-semibold">₹{finalPrice}</span>
                    {product.discount > 0 && (
                        <>
                            <span className="line-through text-gray-500 ml-2">
                                ₹{product.price}
                            </span>
                            <span className="text-green-600 ml-2">
                                ({product.discount}% off)
                            </span>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
