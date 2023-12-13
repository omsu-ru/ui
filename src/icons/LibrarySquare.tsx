import * as React from "react";
import type { SVGProps } from "react";
const SvgLibrarySquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 2.25H3.75a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5M5.25 5.25v7.5M8.25 5.25v7.5M11.25 5.25l1.5 7.5"
    />
  </svg>
);
export default SvgLibrarySquare;
