// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/searchSlice';

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items || []);
  const cartCount = Array.isArray(cartItems) ? cartItems.length : 0;

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <header className="bg-[#131921] text-white px-6 py-3 flex flex-wrap md:flex-nowrap items-center justify-between sticky top-0 z-50 h-20 shadow-md">
      {/* 🔷 Logo */}
      <Link to="/" className="text-2xl font-bold text-white mr-4" aria-label="ShoppyGlobe Logo">
        Shoppy<span className="text-yellow-400">Globe</span>
      </Link>

      {/* 🔍 Search Bar */}
      <div className="flex flex-grow max-w-[500px] items-center my-2 md:my-0 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search products..."
          aria-label="Search products"
          className="flex-grow p-2 rounded-l-md outline-none text-black bg-white border border-gray-300 focus:ring-2 focus:ring-yellow-400"
          onChange={handleSearchChange}
        />
        <button
          className=" ml-2 bg-yellow-400 text-black px-4 py-2 rounded-r-md hover:bg-yellow-500 transition"
          aria-label="Search"
        >
          Search
        </button>
      </div>

      {/* 🧾 Right Menu */}
      <div className="flex gap-6 items-center mt-3 md:mt-0 ml-4">
        <div className="text-sm leading-tight hidden sm:block">
          <p className="text-gray-300">Hello, Sign in</p>
          <p className="font-bold">Account & Lists</p>
        </div>

        <div className="text-sm leading-tight hidden sm:block">
          <p className="text-gray-300">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        {/* 🛒 Cart */}
        <Link
          to="/cart"
          className="relative"
          aria-label="Go to Cart"
        >
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
