import * as React from "react"
const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#F4F4F4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M14.43 18.07 20.5 12l-6.07-6.07M3.5 12h16.83"
    />
  </svg>
)
export default Arrow
