import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartHandshake = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 10.5c1.117-1.095 2.25-2.408 2.25-4.125a4.125 4.125 0 0 0-4.125-4.125c-1.32 0-2.25.375-3.375 1.5-1.125-1.125-2.055-1.5-3.375-1.5A4.125 4.125 0 0 0 1.5 6.375C1.5 8.1 2.625 9.412 3.75 10.5L9 15.75z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3.75 6.78 5.97a1.628 1.628 0 0 0 0 2.31 1.631 1.631 0 0 0 2.25.053l1.553-1.426a2.115 2.115 0 0 1 2.842 0l2.22 1.995M13.5 11.25 12 9.75M11.25 13.5 9.75 12"
    />
  </svg>
);
export default SvgHeartHandshake;
