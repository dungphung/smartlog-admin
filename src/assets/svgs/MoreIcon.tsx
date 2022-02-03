import * as React from 'react'

const SvgComponent = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 2.984a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm0 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm0 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      fill="#000"
      fillOpacity={0.85}
    />
  </svg>
)

export default SvgComponent
