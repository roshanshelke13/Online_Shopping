import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            <p className="text-gray-600 mb-2">Summary</p>
            <p className="mb-4">
              <span className="font-medium">Total Items:</span> {cart.length}
            </p>
            <div className="mb-6">
              <p className="text-lg font-semibold">
                Total Amount: <span className="text-green-600">${totalAmount.toFixed(2)}</span>
              </p>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
