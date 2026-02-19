import { useLocation, Link } from "react-router-dom";

const OrderSuccess = () => {

    const location = useLocation();
    const order = location.state;

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">

            <h1 className="text-3xl font-bold mb-4">
                Order Placed Successfully!
            </h1>

            <p className="mb-6 text-gray-600">
                Thanks {order.customer.name}
            </p>

            <div className="bg-white shadow rounded p-6 max-w-md w-full text-left">
                <h2 className="font-semibold mb-2">Delivery To:</h2>

                <p>{order.customer.name}</p>
                <p>{order.customer.address}</p>
                <p>{order.customer.city}</p>
                <p>{order.customer.pincode}</p>
                <p>Phone: {order.customer.phone}</p>

                <hr className="my-4" />

                <p className="font-semibold">
                    Total Paid: ₹{order.total}
                </p>

                <p className="text-sm text-gray-500">
                    Ordered on: {order.date}
                </p>
            </div>

            <Link
                to="/"
                className="mt-6 bg-[#131921] text-white px-6 py-3 rounded"
            >
                Continue Shopping
            </Link>
        </div>
    );
};

export default OrderSuccess;
