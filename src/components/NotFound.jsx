// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl mb-2">Oops! Page not found.</p>
      <p className="mb-6 text-gray-600">The page you're looking for doesn't exist or was moved.</p>
      <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
