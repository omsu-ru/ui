import * as React from "react";
import type { SVGProps } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 9H12l-1.5 2.25h-3L6 9H1.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.088 3.833 1.5 9v4.5A1.5 1.5 0 0 0 3 15h12a1.5 1.5 0 0 0 1.5-1.5V9l-2.588-5.167A1.5 1.5 0 0 0 12.57 3H5.43a1.5 1.5 0 0 0-1.342.833"
    />
  </svg>
);
export default SvgInbox;
