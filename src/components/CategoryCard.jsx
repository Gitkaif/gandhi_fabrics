import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.slug}`}
      className="group relative block h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-blue-50 via-white to-white"
    >
      <div className="w-full h-64 overflow-hidden">
        <LazyImage
          src={category.images?.[0] || 'https://via.placeholder.com/300x300'}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
        <h3 className="text-white text-lg font-semibold">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;