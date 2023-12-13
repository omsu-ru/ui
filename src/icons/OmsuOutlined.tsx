import * as React from "react";
import type { SVGProps } from "react";
const SvgOmsuOutlined = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    stroke={props.color}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      clipPath="url(#omsu-outlined_svg__a)"
    >
      <path d="M7.25 12.5c1.5.044 5.25-.044 5.25-4.36C12.5 1.08.875 4.22.875 4.22v8.28" />
      <path d="M5.163 5.874v8.639s9.587 2.15 9.587-6.49c0-6.69-7.427-6.964-9.901-6.715C2.375 1.556.949 2 .949 2M3.05 5.862v7.388" />
    </g>
    <defs>
      <clipPath id="omsu-outlined_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOmsuOutlined;
