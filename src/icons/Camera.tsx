import * as React from "react";
import type { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.406 3H6.844L5.062 5.11H2.926c-.378 0-.74.148-1.008.411a1.397 1.397 0 0 0-.417.995v6.328c0 .373.15.73.417.994.268.264.63.412 1.008.412h11.4c.378 0 .74-.148 1.008-.412.267-.264.417-.621.417-.994V6.516c0-.373-.15-.731-.417-.995a1.435 1.435 0 0 0-1.008-.412h-2.137z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.625 11.25a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75"
    />
  </svg>
);
export default SvgCamera;
