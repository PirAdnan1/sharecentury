import * as React from "react"
const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={11.539} stroke="#A3A3A3" strokeWidth={0.923} />
    <g clipPath="url(#a)">
      <path
        fill="#A3A3A3"
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM9.449 16.453H7.443V10.16H9.45v6.293ZM8.446 9.335a1.129 1.129 0 1 1 0-2.257 1.129 1.129 0 0 1 0 2.257Zm8.237 7.118h-1.969v-3.441c0-.175.028-1.334-.957-1.334a1.088 1.088 0 0 0-.903.442c-.18.241-.277.535-.275.837v3.496h-1.966V10.16h1.871v.883c.448-.687 1.012-.938 1.567-1.04.986-.18 2.632.42 2.632 2.212v4.238Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M3 3h18v18H3z" />
      </clipPath>
    </defs>
  </svg>
)
export default Linkedin
