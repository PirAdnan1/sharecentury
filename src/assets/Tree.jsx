import * as React from "react"
const Tree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <g fill="#303B3E" clipPath="url(#a)">
      <path d="M33.106 19.135A6.728 6.728 0 0 0 26.4 12a6.728 6.728 0 0 0-6.147 4.018 3.237 3.237 0 0 0-1.053-.178 3.36 3.36 0 0 0-3.332 2.992A4.781 4.781 0 0 0 12 23.52c0 2.647 2.153 4.8 4.8 4.8h4.32a.48.48 0 0 0 0-.96H16.8a3.844 3.844 0 0 1-3.84-3.84 3.823 3.823 0 0 1 3.418-3.795c.242-.027.422-.28.422-.525 0-1.323 1.077-2.4 2.4-2.4.37 0 .74.094 1.097.28a.477.477 0 0 0 .674-.267A5.765 5.765 0 0 1 26.4 12.96a5.766 5.766 0 0 1 5.76 5.76c0 .229-.017.453-.043.675a.48.48 0 0 0 .321.51 3.832 3.832 0 0 1 2.602 3.615 3.844 3.844 0 0 1-3.84 3.84h-4.32a.48.48 0 0 0 0 .96h4.32c2.647 0 4.8-2.153 4.8-4.8a4.786 4.786 0 0 0-2.894-4.385Z" />
      <path d="M24 20.64a.48.48 0 0 0-.48.48v14.4a.48.48 0 0 0 .96 0v-14.4a.48.48 0 0 0-.48-.48Z" />
      <path d="m28.18 24.62-3.84-3.84a.48.48 0 0 0-.679 0l-3.84 3.84a.48.48 0 0 0 .679.679l3.5-3.5 3.5 3.5a.482.482 0 0 0 .68-.679Z" />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={48} height={48} fill="#fff" rx={24} />
      </clipPath>
    </defs>
  </svg>
)
export default Tree