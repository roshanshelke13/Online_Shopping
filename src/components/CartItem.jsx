import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow p-4">
      {/* Image Section */}
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 ml-4">
        <h1 className="text-lg font-semibold line-clamp-1">{item.title}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-green-600 font-bold">${item.price}</span>
          <button
            onClick={removeFromCart}
            className="hover:scale-110 transition-transform duration-200"
            title="Remove Item"
          >
            <FcDeleteDatabase className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
