import * as React from "react";
import type { SVGProps } from "react";
const SvgSparkles = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 2.25 7.566 6.61a1.5 1.5 0 0 1-.956.956L2.25 9l4.36 1.434a1.501 1.501 0 0 1 .956.956L9 15.75l1.434-4.36a1.501 1.501 0 0 1 .956-.956L15.75 9l-4.36-1.434a1.5 1.5 0 0 1-.956-.956zM3.75 2.25v3M14.25 12.75v3M2.25 3.75h3M12.75 14.25h3"
    />
  </svg>
);
export default SvgSparkles;
