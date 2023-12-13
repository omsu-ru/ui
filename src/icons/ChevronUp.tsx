import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 11.25 9 6.75l-4.5 4.5"
    />
  </svg>
);
export default SvgChevronUp;
