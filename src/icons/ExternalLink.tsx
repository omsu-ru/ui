import * as React from "react";
import type { SVGProps } from "react";
const SvgExternalLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 9.75v4.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5h4.5M11.25 2.25h4.5v4.5M7.5 10.5l8.25-8.25"
    />
  </svg>
);
export default SvgExternalLink;
