import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/searchSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState('');
  const cartItems = useSelector((state) => state.cart?.items || []);
  const cartCount = Array.isArray(cartItems) ? cartItems.length : 0;

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInput(value);
    dispatch(setSearchQuery(value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate(`/search?q=${input}`);
    }
  };

  return (
    <header className="bg-[#131921] text-white px-4 py-3 sticky top-0 z-50 shadow-md">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">

       
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link to="/" className="text-2xl font-bold text-white" aria-label="ShoppyGlobe Logo">
            Shoppy<span className="text-yellow-400">Globe</span>
          </Link>
        </div>

       
        <form onSubmit={handleSearchSubmit} className="flex w-full sm:w-[500px]">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-grow p-2 rounded-l-md outline-none text-black bg-white border border-gray-300 focus:ring-2 focus:ring-yellow-400"
            value={input}
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black px-4 py-2 rounded-r-md hover:bg-yellow-500 transition"
            aria-label="Search"
          >
            Search
          </button>
        </form>

       
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-sm leading-tight text-left">
            <p className="text-gray-300">Hello, Sign in</p>
            <p className="font-bold">Account & Lists</p>
          </div>

          <div className="hidden sm:block text-sm leading-tight text-left">
            <p className="text-gray-300">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          {/* 🛒 Cart */}
          <Link to="/cart" className="relative " aria-label="Go to Cart">
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
