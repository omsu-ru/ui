import * as React from "react";
import type { SVGProps } from "react";
const SvgFlame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    stroke={props.color}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.375 10.875A1.875 1.875 0 0 0 8.25 9c0-1.035-.375-1.5-.75-2.25-.804-1.607-.168-3.04 1.5-4.5.375 1.875 1.5 3.675 3 4.875 1.5 1.2 2.25 2.625 2.25 4.125a5.251 5.251 0 0 1-10.5 0c0-.865.325-1.72.75-2.25a1.875 1.875 0 0 0 1.875 1.875"
    />
  </svg>
);
export default SvgFlame;
