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
        d="M5.233 5.157a.25.25 0 11-.355.353.25.25 0 01.355-.353M8.177 5.157a.25.25 0 11-.355.353.25.25 0 01.355-.353M11.121 5.157a.25.25 0 11-.354.353.25.25 0 01.354-.353"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.333 8.667h-4A1.333 1.333 0 012 7.333v-4C2 2.597 2.597 2 3.333 2h9.334C13.403 2 14 2.597 14 3.333v2M12.928 10.463V9.307c0-.722-.586-1.308-1.308-1.308v0c-.723 0-1.309.586-1.309 1.308v1.156"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M13.334 10.465H10a.667.667 0 00-.666.667v2.2c0 .369.298.667.666.667h3.334a.667.667 0 00.666-.666v-2.201a.667.667 0 00-.666-.667z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgComponent
