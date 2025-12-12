// src/components/HaldiramFrame.jsx
import React from "react";

/**
 * HaldiramFrame
 * Wrap content with ornamental corners + golden border.
 * Usage:
 *  <HaldiramFrame>
 *    <div>...card content...</div>
 *  </HaldiramFrame>
 */
const HaldiramFrame = ({ children, className = "" }) => {
  // data-URI small SVG corner (golden stroke)
  const cornerSvg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path d='M6 42 Q6 6 42 6' stroke='%23C8A46A' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>`
  );

  return (
    <div className={`relative ${className}`}>
      {/* Corners */}
      <span
        aria-hidden
        className="absolute -top-3 -left-3 w-12 h-12 bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml;utf8,${cornerSvg}")` }}
      />
      <span
        aria-hidden
        className="absolute -top-3 -right-3 w-12 h-12 rotate-90 bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml;utf8,${cornerSvg}")` }}
      />
      <span
        aria-hidden
        className="absolute -bottom-3 -left-3 w-12 h-12 -rotate-90 bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml;utf8,${cornerSvg}")` }}
      />
      <span
        aria-hidden
        className="absolute -bottom-3 -right-3 w-12 h-12 rotate-180 bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml;utf8,${cornerSvg}")` }}
      />

      {/* Inner border and padding */}
      <div className="border-2 border-[#E7CFA8] rounded-lg p-4 bg-white">
        {children}
      </div>
    </div>
  );
};

export default HaldiramFrame;
