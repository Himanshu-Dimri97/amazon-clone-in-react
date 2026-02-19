import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/");
        }
    }, []);

    const [form, setForm] = useState({
        name: "",
        address: "",
        city: "",
        phone: "",
        pincode: "",
    });

    const [payment, setPayment] = useState("COD");

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

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


                    <div>
                        <h3 className="font-semibold mb-3 text-lg">Payment Method</h3>

                        <div className="space-y-3">

                            {["COD", "UPI", "CARD"].map((method) => (
                                <label
                                    key={method}
                                    className={`flex items-center gap-3 border p-3 rounded cursor-pointer ${payment === method
                                        ? "border-blue-600 bg-blue-50"
                                        : ""
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={payment === method}
                                        onChange={() => setPayment(method)}
                                    />
                                    {method === "COD" && "Cash on Delivery"}
                                    {method === "UPI" && "UPI Payment"}
                                    {method === "CARD" && "Debit / Credit Card"}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#131921] text-white py-3 rounded hover:bg-[#131921] transition font-semibold"
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
