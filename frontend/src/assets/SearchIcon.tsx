import React from "react";

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="21"
      cy="21"
      r="12"
      stroke="white"
      strokeWidth="4"
    />
    <line
      x1="30"
      y1="30"
      x2="40"
      y2="40"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);
