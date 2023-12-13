import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerRightDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 11.25 11.25 15 15 11.25"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h5.25a3 3 0 0 1 3 3v9"
    />
  </svg>
);
export default SvgCornerRightDown;
