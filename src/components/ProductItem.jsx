import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const { id, title, price, thumbnail } = product;
    dispatch(addToCart({ id, title, price, thumbnail }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition hover:-translate-y-1 flex flex-col h-full">
      <Link to={`/products/${product.id}`} className="flex-1">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-md mb-3"
        />
        <h2 className="text-base sm:text-lg font-semibold truncate mb-1">
          {product.title}
        </h2>
        <p className="text-gray-700 font-medium mb-3 text-sm sm:text-base">
          ₹{product.price}
        </p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm sm:text-base"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
