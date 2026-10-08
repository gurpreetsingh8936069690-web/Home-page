import React from 'react';

/**
 * RvCanvasLogo - Dedicated custom SVG brand mark for RV Canvas
 * Combines an artful "canvas" frame with a sleek, geometric "RV" monogram
 * and electric gradient highlights.
 */
export default function RvCanvasLogo({ size = 26, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={`rv-canvas-logo-svg ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Subtle inner depth gradient */}
        <linearGradient id="rvCanvasInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Monogram Stroke Gradient */}
        <linearGradient id="rvMonogramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#a5f3fc" />
        </linearGradient>

        {/* Glowing cyan dot filter */}
        <filter id="rvGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#06b6d4" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Canvas framing corner brackets (signifying the blank canvas grid) */}
      <path
        d="M6 14 L6 6 L14 6"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.65"
        fill="none"
      />
      <path
        d="M42 34 L42 42 L34 42"
        stroke="#38bdf8"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        fill="none"
      />

      {/* Monogram Letter 'R' */}
      <path
        d="M13 35 L13 13 L21.5 13 C25.5 13 27.5 15.2 27.5 18.5 C27.5 21.8 25.5 24 21.5 24 L13 24"
        stroke="url(#rvMonogramGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M19.5 24 L26 35"
        stroke="url(#rvMonogramGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Monogram Letter 'V' */}
      <path
        d="M26.5 13 L32.5 35 L38.5 13"
        stroke="url(#rvMonogramGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Creative Canvas Accent Sparkle / Anchor Dot */}
      <circle
        cx="41"
        cy="7"
        r="2.5"
        fill="#22d3ee"
        filter="url(#rvGlow)"
      />
    </svg>
  );
}
