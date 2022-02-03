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
      clipRule="evenodd"
      d="M7.333 8.731v2.046a.667.667 0 0 1-1.114.494l-4.02-3.644a.666.666 0 0 1 .016-1.002l4.02-3.412a.666.666 0 0 1 1.098.508v1.624c3.642 0 6.667 2.248 6.667 5.988v.753c-1.231-2.456-3.791-3.355-6.667-3.355Z"
      stroke="#4E4E4E"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
