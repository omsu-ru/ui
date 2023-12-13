import * as React from "react";
import type { SVGProps } from "react";
const SvgBookOpen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.425 2.25H5.7c.756 0 1.48.316 2.015.879.535.562.835 1.325.835 2.121v10.5c0-.597-.225-1.169-.626-1.591a2.085 2.085 0 0 0-1.512-.659H1.425z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.675 2.25H11.4a2.78 2.78 0 0 0-2.015.879A3.082 3.082 0 0 0 8.55 5.25v10.5c0-.597.225-1.169.626-1.591.4-.422.945-.659 1.511-.659h4.988z"
    />
  </svg>
);
export default SvgBookOpen;
