// src/components/SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductItem from './ProductItem';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('q')?.toLowerCase();

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Search Results for: <span className="text-blue-600">{query}</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
