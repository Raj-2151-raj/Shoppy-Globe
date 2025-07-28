import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // ✅ Import Footer
import Spinner from './components/Spinner';
import './index.css';

const HeroBanner = lazy(() => import('./components/HeroBanner'));
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <>
      <Header />
      <main className="p-4 min-h-screen">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroBanner />
                  <ProductList />
                </>
              }
            />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      
      {/* ✅ Footer rendered after main content */}
      <Footer />
    </>
  );
}

export default App;
