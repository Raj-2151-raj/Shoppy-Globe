// src/hooks/useFetchProductDetail.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProductDetail = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Product not found');
        setLoading(false);
      });
  }, [productId]);

  return { product, loading, error };
};

export default useFetchProductDetail;
