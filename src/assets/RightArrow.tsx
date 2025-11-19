import React from "react";

export const RightArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Linha */}
    <line
      x1="1"
      y1="24"
      x2="28"
      y2="24"
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Seta */}
    <path
      d="M24 12 L38 24 L24 36"
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
