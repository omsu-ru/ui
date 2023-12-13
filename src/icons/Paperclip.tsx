import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperclip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.08 8.288 9.188 15.18A4.502 4.502 0 1 1 2.82 8.813l6.428-6.428A3.004 3.004 0 0 1 13.5 6.63l-6.442 6.427a1.5 1.5 0 1 1-2.123-2.122l6.368-6.36"
    />
  </svg>
);
export default SvgPaperclip;
