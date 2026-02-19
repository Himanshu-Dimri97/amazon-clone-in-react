import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    const { cart, setCart } = useContext(CartContext);

    const [form, setForm] = useState({
        name: "",
        address: "",
        city: "",
        phone: "",
        pincode: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.phone.length !== 10) {
            alert("Phone must be 10 digits");
            return;
        }

        if (form.pincode.length !== 6) {
            alert("Pincode must be 6 digits");
            return;
        }

        const orderData = {
            customer: form,
            items: cart,
            total: total,
            date: new Date().toLocaleString(),
        };

        setCart([]);

        navigate("/success", { state: orderData });
    };


    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="text-2xl font-semibold mb-2">
                    Shopping ho chuki hai!
                </h2>
                <p className="text-gray-500">
                    Aapki delivery jald hi pahunch jayegi 🚚
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">

            <div className="bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-6">
                    Delivery Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        required
                        type="text"
                        placeholder="Full Name"
                        className="w-full border p-3 rounded"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />

                    <textarea
                        required
                        placeholder="Full Address"
                        className="w-full border p-3 rounded"
                        value={form.address}
                        onChange={(e) =>
                            setForm({ ...form, address: e.target.value })
                        }
                    />

                    <input
                        required
                        type="text"
                        placeholder="City"
                        className="w-full border p-3 rounded"
                        value={form.city}
                        onChange={(e) =>
                            setForm({ ...form, city: e.target.value })
                        }
                    />

                    <input
                        required
                        type="text"
                        placeholder="Phone Number"
                        maxLength={10}
                        inputMode="numeric"
                        className="w-full border p-3 rounded"
                        value={form.phone}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                phone: e.target.value.replace(/\D/g, ""),
                            })
                        }
                    />

                    <input
                        required
                        type="text"
                        placeholder="Pincode"
                        maxLength={6}
                        inputMode="numeric"
                        className="w-full border p-3 rounded"
                        value={form.pincode}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                pincode: e.target.value.replace(/\D/g, ""),
                            })
                        }
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition font-semibold"
                    >
                        Place Order
                    </button>
                </form>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-6">
                    Order Summary
                </h2>

                <div className="space-y-4 max-h-75 overflow-y-auto">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between border-b pb-2"
                        >
                            <div>
                                <p className="font-medium">{item.title}</p>
                                <p className="text-sm text-gray-500">
                                    Qty: {item.qty}
                                </p>
                            </div>

                            <p className="font-semibold">
                                ₹{item.price * item.qty}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{total}</span>
                </div>
            </div>

        </div>
    );
};

export default Checkout;
