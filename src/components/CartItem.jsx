import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
} from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between border-b py-4 hover:-translate-y-1 duration-500">
      <div className="flex items-center gap-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600">₹ {item.price}</p>
          <div className="flex items-center mt-2 gap-2">
            <button
              className="bg-gray-200 px-2 rounded"
              onClick={() => dispatch(decreaseQuantity(item.id))}
            >
              −
            </button>
            <span className="px-3">{item.quantity}</span>
            <button
              className="bg-gray-200 px-2 rounded"
              onClick={() => dispatch(addToCart(item))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-500 font-semibold"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
