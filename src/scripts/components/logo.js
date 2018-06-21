import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ className, color }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 30">
    <path
      d="M.01 7.09l11.14 21.94h4.44L26.72 7.09h-7.78l-5.57 11.76L7.8 7.08H.01zm51.52 10.97a11.77 11.77 0 0 0-3.3-8.16 13.56 13.56 0 0 0-9.61-3.54A13.56 13.56 0 0 0 29 9.9a11.74 11.74 0 0 0 0 16.32 13.56 13.56 0 0 0 9.6 3.54 13.56 13.56 0 0 0 9.62-3.54 11.77 11.77 0 0 0 3.3-8.16zm-12.91-5.7a5.43 5.43 0 0 1 3.99 1.57 5.55 5.55 0 0 1 1.62 4.13 5.55 5.55 0 0 1-1.62 4.13 5.4 5.4 0 0 1-3.94 1.57 5.47 5.47 0 0 1-4.04-1.57A5.56 5.56 0 0 1 33 18.06a5.55 5.55 0 0 1 1.62-4.13 5.43 5.43 0 0 1 4-1.58zM69.6 8.21a13.9 13.9 0 0 0-7.3-1.87 9.7 9.7 0 0 0-6.65 2.22 6.79 6.79 0 0 0-2.12 5.06 5.4 5.4 0 0 0 1.58 3.98 8.79 8.79 0 0 0 3.54 2.02l1.78.54a9.37 9.37 0 0 1 2.17.79 1.45 1.45 0 0 1 .78 1.28 1.87 1.87 0 0 1-.74 1.42 3.98 3.98 0 0 1-2.21.5 6.64 6.64 0 0 1-2.96-.7 12.22 12.22 0 0 1-2.41-1.62l-3.01 4.78a13.08 13.08 0 0 0 9.02 3.14 9.5 9.5 0 0 0 7.14-2.5 7.96 7.96 0 0 0 2.27-5.76 5.22 5.22 0 0 0-1.72-4.18 9.35 9.35 0 0 0-3.65-1.92l-1.87-.59a12.78 12.78 0 0 1-2.12-.74 1.15 1.15 0 0 1-.7-.98 1.51 1.51 0 0 1 .45-.98 3.02 3.02 0 0 1 2.02-.64 8.08 8.08 0 0 1 3.9 1.23zm10.33 6.84a4.92 4.92 0 0 1 1.23-2.36 5.22 5.22 0 0 1 6.95-.2 5.57 5.57 0 0 1 1.43 2.56h-9.61zm16.16 3.5a12.5 12.5 0 0 0-3.1-8.9 11.6 11.6 0 0 0-8.72-3.3 11.52 11.52 0 0 0-8.43 3.14 12.48 12.48 0 0 0-3.35 8.66 11.77 11.77 0 0 0 3.3 8.45c2.56 2.56 5.47 3.15 8.77 3.15a13.07 13.07 0 0 0 6.95-1.62 9.94 9.94 0 0 0 4.28-5.54l-6.75-.66a4.3 4.3 0 0 1-1.53 1.82 5.84 5.84 0 0 1-2.85.64A4.77 4.77 0 0 1 81 23.04a5.99 5.99 0 0 1-1.33-3.74h16.4v-.74zm1.84 6.78a4.49 4.49 0 1 0 4.48-4.48 4.43 4.43 0 0 0-4.48 4.48zM120.9 12.8V7.09h-4.39V.01h-7.1V7.1h-2.46v5.7h2.46v16.24h7.1V12.8h4.39zm.6-5.7l11.14 21.93h4.44l11.14-21.94h-7.79l-5.57 11.76L129.3 7.1h-7.78z"
      fill={color || 'white'}
    />
  </svg>
);

export default Logo;
