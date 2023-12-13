import * as React from "react";
import type { SVGProps } from "react";
const SvgUsers2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 14.25a4.5 4.5 0 1 0-9 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 9.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6M16.5 14.25a4.5 4.5 0 0 0-4.5-4.5 3 3 0 1 0 0-6"
    />
  </svg>
);
export default SvgUsers2;
