import * as React from "react";
import type { SVGProps } from "react";
const SvgMicroscope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 13.5h6M2.25 16.5h13.5M10.5 16.5a5.25 5.25 0 1 0 0-10.5h-.75M6.75 10.5h1.5M6.75 9a1.5 1.5 0 0 1-1.5-1.5v-3h4.5v3A1.5 1.5 0 0 1 8.25 9zM9 4.5V2.25a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4.5"
    />
  </svg>
);
export default SvgMicroscope;
