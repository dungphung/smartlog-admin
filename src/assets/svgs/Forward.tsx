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
      d="M13.434 7.379V4.186M10.874 11.2l-1.28 1.28 1.28 1.28"
      stroke="#4E4E4E"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M12.153 2.898H3.847c-.711 0-1.287.576-1.287 1.287v0c0 .427.212.826.565 1.065l3.429 2.324a2.58 2.58 0 0 0 2.894 0l3.428-2.323c.352-.24.564-.639.564-1.065v0c0-.712-.576-1.288-1.287-1.288v0Z"
      stroke="#4E4E4E"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.68 11.219H3.84a1.28 1.28 0 0 1-1.28-1.28V4.186M12.16 9.938h.64c.707 0 1.28.573 1.28 1.28v0a1.28 1.28 0 0 1-1.28 1.28h-.314.314-3.206"
      stroke="#4E4E4E"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
