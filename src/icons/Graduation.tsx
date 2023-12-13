import * as React from "react";
import type { SVGProps } from "react";
const SvgGraduation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    stroke={props.color}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#graduation_svg__a)"
    >
      <path d="m10.072 1.751 4.39.271 2.423 3.774-4.39-.271z" />
      <path d="m11.041 3.26-.983 1.752c.432 1.658 2.476 2.871 4.088 2.427l.983-1.751M1.287 7.451l3.604-2.59L9.07 6.27 5.465 8.86z" />
      <path d="m2.958 8.015.287 2c1.34 1.024 3.675.67 4.67-.707l-.287-2" />
      <path
        strokeWidth={0.6}
        d="M3 15.005v-2.03M3 17v-.84m4.286-.385V13.85m3.857-1.155V10M15 15.18v-2.415m0-1.225v-.56m-7.714 1.785v-.84"
      />
    </g>
    <defs>
      <clipPath id="graduation_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGraduation;
