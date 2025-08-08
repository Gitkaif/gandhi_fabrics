import React from 'react';

const AppBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-white">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/60 via-purple-200/40 to-pink-200/30 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-amber-200/40 via-rose-200/30 to-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[60%] rounded-[999px] bg-gradient-to-r from-blue-100/30 via-indigo-100/20 to-purple-100/30 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default AppBackground; 