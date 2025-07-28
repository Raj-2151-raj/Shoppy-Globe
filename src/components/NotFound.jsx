import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // ✅ Link imported here

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-700 mt-4">
        No page found at <code className="bg-gray-100 p-1 rounded">{location.pathname}</code>
      </p>
      <Link
        to="/"
        className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
