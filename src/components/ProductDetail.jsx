import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams(); // get product ID from URL
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-8 hover:-translate-y-1">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full md:w-1/2 h-[400px] object-cover rounded-lg"
      />

      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-2">₹{product.price * 80}</p>
        <p className="mb-4 text-sm text-gray-500">Category: {product.category}</p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
