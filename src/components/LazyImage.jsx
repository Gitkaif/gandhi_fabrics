import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width = '100%', 
  height = 'auto',
  isBackground = false,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('');
  const [dimensions, setDimensions] = useState({ width, height });

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      return;
    }

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setIsLoading(false);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (isLoading) {
    return (
      <div 
        className={`skeleton-box ${isBackground ? 'absolute inset-0' : ''} ${className}`}
        style={{ 
          ...(isBackground ? {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          } : {
            width,
            height: height === 'auto' ? '200px' : height,
          }),
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      />
    );
  }

  if (!imageSrc) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center rounded-lg ${className}`}
        style={{ 
          width, 
          height: height === 'auto' ? '200px' : height 
        }}
      >
        <span className="text-gray-500">Image not available</span>
      </div>
    );
  }

  const imageComponent = (
    <div className="w-full h-full">
      <LazyLoadImage
        alt={alt}
        src={imageSrc}
        effect="blur"
        width={width === '100%' ? '100%' : width}
        height={height === 'auto' ? '100%' : height}
        className={`transition-opacity duration-300 w-full h-full object-cover ${className}`}
        style={{ 
          opacity: isLoading ? 0 : 1,
          display: 'block',
          ...(isBackground && {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          })
        }}
        {...props}
      />
    </div>
  );

  if (isBackground) {
    return (
      <div className="relative w-full h-full overflow-hidden">
        {imageComponent}
      </div>
    );
  }

  return imageComponent;
};

export default LazyImage;
