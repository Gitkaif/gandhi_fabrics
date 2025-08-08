import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import { getProductsByCategory } from '../data/products';
import LazyImage from './LazyImage';
import { motion } from 'framer-motion';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const categoryProducts = getProductsByCategory(categorySlug);
      setProducts(categoryProducts);
      setLoading(false);
    } catch (err) {
      setError('Failed to load products. Please try again later.');
      setLoading(false);
      console.error('Error loading products:', err);
    }
  }, [categorySlug]);

  const categoryName = categorySlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-white">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/60 via-purple-200/40 to-pink-200/30 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-amber-200/40 via-rose-200/30 to-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[60%] rounded-[999px] bg-gradient-to-r from-blue-100/30 via-indigo-100/20 to-purple-100/30 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Breadcrumb */}
      <nav className="relative bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 py-4 border-b border-white/60">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-slate-600">
            <li>
              <Link to="/" className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors">
                <FiHome className="inline" />
                <span>Home</span>
              </Link>
            </li>
            <li className="text-slate-400"><FiChevronRight className="inline" /></li>
            <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">{categoryName}</li>
          </ol>
        </div>
      </nav>

      {/* Category Header */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative py-14"
      >
        {/* Top bar intentionally left empty by user edits */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold  bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900">
            {categoryName}
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Crafted for events, décor and interiors — elevate your space with enduring quality and refined details.
          </p>
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.div
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-slate-600">Loading products...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative w-full" style={{ aspectRatio: '1' }}>
                  <LazyImage
                    src={product.images?.[0]}
                    alt={product.name || 'Product image'}
                    className="w-full h-full"
                    style={{
                      aspectRatio: '1',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600">No products found in this category.</p>
            <Link 
              to="/" 
              className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded hover:from-indigo-600 hover:to-violet-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </motion.div>
      <Link
        to="/"
        className="mx-4 mb-10 inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm text-white shadow-sm hover:from-indigo-600 hover:to-violet-600"
      >
        <FiHome />
        Back to Home
      </Link>
    </div>
  );
};

export default CategoryPage;