import React from "react";

export interface SvgProps extends React.HTMLAttributes<SVGElement> {
  scale?: number;
  width?: number;
  height?: number;
}

export const Svg: React.FC<SvgProps> = ({ scale = 1, width = 32, height = 32, children, ...props }) => (
  <svg
    width={scale * width}
    height={scale * height}
    viewBox={`0 0 ${scale * width} ${scale * height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);
