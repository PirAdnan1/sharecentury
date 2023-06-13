import * as React from "react"
const Facebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#A3A3A3"
        d="M11.833 3C6.963 3 3 6.963 3 11.833s3.963 8.833 8.833 8.833 8.833-3.963 8.833-8.833S16.704 3 11.833 3Zm2.197 9.144h-1.437v5.122h-2.13v-5.122H9.451v-1.81h1.012V9.163c0-.839.399-2.15 2.15-2.15l1.578.007v1.757h-1.146c-.186 0-.451.093-.451.493v1.064h1.622l-.186 1.81Z"
      />
    </g>
    <circle cx={12} cy={12} r={11.539} stroke="#A3A3A3" strokeWidth={0.923} />
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M3 3h17.666v17.666H3z" />
      </clipPath>
    </defs>
  </svg>
)
export default Facebook
