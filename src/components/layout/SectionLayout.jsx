import React from 'react';

const SectionLayout = ({ children, id, className = '', containerClass = '' }) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className={`container mx-auto px-4 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
