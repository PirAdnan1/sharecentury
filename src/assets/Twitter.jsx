import * as React from "react"
const Twitter = (props) => (
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
        d="M12 3a9.001 9.001 0 0 0 0 18 9.001 9.001 0 0 0 0-18Zm4.11 7.017c.003.089.005.178.005.267 0 2.73-2.078 5.878-5.877 5.878a5.847 5.847 0 0 1-3.167-.928 4.144 4.144 0 0 0 3.058-.856 2.068 2.068 0 0 1-1.93-1.435 2.056 2.056 0 0 0 .934-.035 2.066 2.066 0 0 1-1.657-2.025v-.026c.287.16.607.248.935.258a2.064 2.064 0 0 1-.64-2.758 5.865 5.865 0 0 0 4.259 2.159 2.066 2.066 0 0 1 3.52-1.884c.463-.092.906-.261 1.312-.502a2.074 2.074 0 0 1-.909 1.143 4.12 4.12 0 0 0 1.187-.326 4.2 4.2 0 0 1-1.03 1.07Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M3 3h18v18H3z" />
      </clipPath>
    </defs>
  </svg>
)
export default Twitter
