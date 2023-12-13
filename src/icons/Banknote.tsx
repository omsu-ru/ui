import * as React from "react";
import type { SVGProps } from "react";
const SvgBanknote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 4.5H3A1.5 1.5 0 0 0 1.5 6v6A1.5 1.5 0 0 0 3 13.5h12a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 15 4.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M4.5 9h.008M13.5 9h.008"
    />
  </svg>
);
export default SvgBanknote;
