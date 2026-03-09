'use client'

import React, { useEffect, useRef, useState } from "react";

const StrechedText = ({words, className, baseView}) => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const [viewBox, setViewBox] = useState(baseView);

  useEffect(() => {
    const updateViewBox = () => {
      if (textRef.current) {
        const bbox = textRef.current.getBBox();
        setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      }
    };

    const timeout = setTimeout(() => {
      updateViewBox();
      if (svgRef.current) {
        const observer = new ResizeObserver(updateViewBox);
        observer.observe(svgRef.current);
        return () => observer.disconnect();
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      className={className}
    >
      <svg
        ref={svgRef}
        viewBox={viewBox}
        className="w-full fill-white absolute top-[50%] -translate-y-1/2 left-0 cursor-default"
        preserveAspectRatio="none"
      >
        <text
          ref={textRef}
          x="0.45"
          y="0"
          textAnchor="start"
          lengthAdjust="spacingAndGlyphs"
          alignmentBaseline="baseline"
          dominantBaseline="hanging"
        >
          {words.map((text, index) => (
            <tspan
              key={text + "-" + index}
              alignmentBaseline="baseline"
              className={index % 2 ? "font-main" : "font-secondary font-semibold"}
            >
              {text}
            </tspan>
          ))}
        </text>
      </svg>
    </div>
  );
};

export default StrechedText;
