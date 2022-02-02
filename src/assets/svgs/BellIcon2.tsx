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
        d="M6.38 12.673l.079.23a1.528 1.528 0 001.942.947v0a1.528 1.528 0 00.947-1.942l-.08-.23M7.323 3.47l-.2-.58a1.222 1.222 0 00-1.553-.757v0c-.638.22-.978.916-.758 1.554l.2.578"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M3.703 7.844v0a3.021 3.021 0 011.872-3.84l1.143-.393a3.021 3.021 0 013.84 1.872v0l.607 1.763c.115.335.358.61.676.764l.543.265c.318.155.561.43.676.764v0a1.26 1.26 0 01-.781 1.602l-6.757 2.326a1.26 1.26 0 01-1.602-.78v0c-.115-.336-.093-.702.062-1.02l.265-.543c.155-.318.177-.684.062-1.019l-.606-1.76z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgComponent
