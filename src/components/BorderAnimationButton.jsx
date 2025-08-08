import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BorderAnimationButton = ({ text, to, onClick, className = '' }) => {
  const Content = (
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
      <span>{text}</span>
      <FaLocationArrow />
    </span>
  );

  return (
    <div className={`relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none ${className}`}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]" />
      {to ? (
        <Link to={to} className="h-full w-full rounded-lg" onClick={onClick}>
          {Content}
        </Link>
      ) : (
        <button type="button" className="h-full w-full rounded-lg" onClick={onClick}>
          {Content}
        </button>
      )}
    </div>
  );
};

export default BorderAnimationButton; 