import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.313 2.014A2.328 2.328 0 115.02 5.307a2.328 2.328 0 013.293-3.293M9.575 8.53a7.959 7.959 0 00-2.909-.537c-2.698 0-5.333 1.311-5.333 3.328v.666c0 .368.299.667.667.667h6.275"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.333 14.666A3.333 3.333 0 018 11.332C8 9.53 9.533 7.997 11.335 8a3.333 3.333 0 01-.002 6.667M11.333 11.499v1.333"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.332 9.852a.091.091 0 00-.092.093c0 .051.041.092.093.092a.092.092 0 100-.185"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgComponent
