import { useState } from "react";

const ProductCard = ({ product }) => {
    const [selectedItem, setSelectedItem] = useState(product.items[0]);

    const finalPrice = Math.floor(
        selectedItem.price - (selectedItem.price * selectedItem.discount) / 100
    );

    return (
        <div key={product.id} className="bg-white w-[23%] p-4 rounded-md shadow">

            <h2 className="text-xl font-bold text-black mb-3">{product.title}</h2>

            <div className="flex justify-center">
                <img src={selectedItem.img} className="h-48 object-contain" />
            </div>

            <p className="mt-3 text-[12px] font-semibold leading-4 h-10">{selectedItem.name}</p>

            <div className="flex items-center gap-2 mt-2">

                <span className="text-xl w-15 font-semibold text-black ">
                    ₹{finalPrice}
                </span>

                <span className="text-sm text-[#565959]">MRP:</span>
                <span className="line-through ">
                    ₹{selectedItem.price}
                </span>


            </div>

            <div className="flex gap-2 mt-4">
                {product.items.map((item, index) => (
                    <img
                        key={index}
                        src={item.img}
                        onClick={() => setSelectedItem(item)}
                        className={`w-16 h-16 object-contain rounded-lg cursor-pointer border
            ${selectedItem.img === item.img
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
