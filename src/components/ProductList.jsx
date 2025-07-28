import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-6">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">No products found.</p>
      )}
    </section>
  );
};

export default ProductList;
