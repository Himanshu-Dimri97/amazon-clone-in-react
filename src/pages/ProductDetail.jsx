import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getProductBySlug } from "../api/api";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
    const { addToCart, cart } = useContext(CartContext);
    const navigate = useNavigate();

    const { slug } = useParams();

    const [product, setProduct] = useState(null);
    const [mainImg, setMainImg] = useState(null);

    useEffect(() => {
        getProductBySlug(slug).then(setProduct);
    }, [slug]);

    useEffect(() => {
        if (product) {
            setMainImg(product.images[0]);
        }
    }, [product]);

    if (!product) return <h1 className="p-10">Loading...</h1>;

    const discountPrice = Math.floor(
        product.price - (product.price * product.discount) / 100
    );

    const isAdded = cart.some(item => item.id === product.id);

    return (
        <div className="w-full mx-auto px-6 py-8 grid grid-cols-12 gap-6">

            <div className="col-span-4 flex gap-4">

                <div className="flex flex-col gap-3">
                    {product.images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            onMouseEnter={() => setMainImg(img)}
                            className="w-16 h-16 object-contain border rounded cursor-pointer hover:border-blue-500 transition"
                        />
                    ))}
                </div>

                <div className="flex-1 overflow-hidden group">
                    <img
                        src={mainImg}
                        className="w-full object-contain transition-transform duration-300 group-hover:scale-125"
                    />
                </div>
            </div>

            <div className="col-span-5 space-y-4">

                <h1 className="text-2xl font-medium leading-tight">
                    {product.title}
                </h1>

                <div className="flex items-center gap-2">
                    <span className="bg-green-700 text-white px-2 py-0.5 rounded text-sm">
                        {product.rating} ★
                    </span>
                    <span className="text-gray-600 text-sm">
                        ({product.reviews} reviews)
                    </span>
                </div>

                <div className="space-y-1">
                    <div className="text-3xl font-semibold text-black">
                        ₹{discountPrice}
                    </div>

                    {product.discount > 0 && (
                        <div className="flex gap-3 items-center text-sm">
                            <span className="line-through text-gray-500">
                                ₹{product.price}
                            </span>
                            <span className="text-green-700 font-medium">
                                {product.discount}% OFF
                            </span>
                        </div>
                    )}

                    <p className="text-gray-600 text-sm">
                        Inclusive of all taxes
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-3">
                    <div className="border p-3 rounded text-sm hover:shadow">
                        <b>Bank Offer</b><br />
                        Upto ₹1,500 discount
                    </div>

                    <div className="border p-3 rounded text-sm hover:shadow">
                        <b>No Cost EMI</b><br />
                        EMI starts ₹598
                    </div>

                    <div className="border p-3 rounded text-sm hover:shadow">
                        <b>Cashback</b><br />
                        Upto ₹509 cashback
                    </div>
                </div>

                <div className="pt-4 space-y-2 text-sm">
                    <div><b>Brand:</b> {product.brand}</div>
                    <div><b>RAM:</b> {product.ram}</div>
                    <div><b>Storage:</b> {product.storage}</div>
                    <div><b>OS:</b> {product.os}</div>
                </div>
            </div>

            <div className="col-span-3 border rounded-lg p-5 space-y-4 h-fit sticky top-20 shadow-sm">

                <div className="text-2xl font-semibold text-black">
                    ₹{discountPrice}
                </div>

                <p className="text-green-700 text-sm">
                    FREE delivery available
                </p>

                <button
                    onClick={() => {
                        if (isAdded) {
                            navigate("/cart");
                        } else {
                            addToCart(product);
                        }
                    }}
                    className={`w-full py-2 rounded-full font-medium transition 
                        ${isAdded
                            ? "bg-orange-500 text-white hover:bg-orange-600"
                            : "bg-yellow-400 hover:bg-yellow-500"
                        }`}
                >
                    {isAdded ? "Go to Cart" : "Add to Cart"}
                </button>

                <button className="w-full bg-orange-500 py-2 rounded-full text-white font-medium hover:bg-orange-600 transition">
                    Buy Now
                </button>

                <div className="text-xs text-gray-600 pt-2">
                    Secure transaction
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
