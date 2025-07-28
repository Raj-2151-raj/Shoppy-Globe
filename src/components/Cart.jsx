import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.items || []);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((total, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 1);
    return total + itemTotal;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-4 mt-6  ">
      <h2 className="text-4xl font-bold mb-8">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg ">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 ">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center space-x-4 ">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">₹{item.price}</p>

                  
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      className="px-2 bg-gray-200 rounded"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 bg-gray-200 rounded"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                    <button
                      className="ml-4 text-red-500"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-lg font-bold">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="text-right text-xl font-bold border-t pt-4">
            Total: ₹{totalAmount.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
