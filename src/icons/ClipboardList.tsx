import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardList = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 1.5h-4.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3h1.5A1.5 1.5 0 0 1 15 4.5V15a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 15V4.5A1.5 1.5 0 0 1 4.5 3H6M9 8.25h3M9 12h3M6 8.25h.008M6 12h.008"
    />
  </svg>
);
export default SvgClipboardList;
