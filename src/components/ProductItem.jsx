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
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition hover:-translate-y-1">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
        <h2 className="text-lg font-semibold truncate">{product.title}</h2>
        <p className="text-gray-700 font-medium mb-2">₹{product.price}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
