import React, { useEffect, useMemo } from 'react';

const ensureKeyframes = (name) => {
  if (typeof document === 'undefined') return;
  const id = `__gtkf_${name}`;
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `@keyframes ${name}{0%{background-position:0% 50%}100%{background-position:100% 50%}}`;
  document.head.appendChild(style);
};

const GradientText = ({
  colors = ['#3ca2fa', '#80eeb4', '#3ca2fa', '#80eeb4', '#3ca2fa'],
  animationSpeed = 3,
  showBorder = false,
  className = '',
  children,
}) => {
  const keyframesName = useMemo(() => 'gtxShift', []);

  useEffect(() => {
    ensureKeyframes(keyframesName);
  }, [keyframesName]);

  const gradient = useMemo(() => {
    const stops = colors
      .map((c, i) => `${c} ${(i / Math.max(colors.length - 1, 1)) * 100}%`)
      .join(', ');
    return `linear-gradient(90deg, ${stops})`;
  }, [colors]);

  const style = {
    backgroundImage: gradient,
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `${keyframesName} ${animationSpeed}s linear infinite`,
    textShadow: showBorder ? '0 0 1px rgba(0,0,0,0.25)' : undefined,
  };

  return (
    <span className={`inline-block ${className}`} style={style}>
      {children}
    </span>
  );
};

export default GradientText; 