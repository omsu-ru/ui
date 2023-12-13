import * as React from "react";
import type { SVGProps } from "react";
const SvgTrash2 = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="#F75F5F"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.132 4.5h12.79M13.5 4.5V15c0 .75-.71 1.5-1.421 1.5H4.974c-.71 0-1.421-.75-1.421-1.5V4.5M5.684 4.5V3c0-.75.71-1.5 1.421-1.5h2.842c.71 0 1.421.75 1.421 1.5v1.5M7.105 8.25v4.5M9.947 8.25v4.5"
    />
  </svg>
);
export default SvgTrash2;
