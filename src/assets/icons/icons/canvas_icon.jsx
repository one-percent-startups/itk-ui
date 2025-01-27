import React from 'react'

function CanvasIcon({ color }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.66667 1.5H3.16667C2.72464 1.5 2.30072 1.67559 1.98816 1.98816C1.67559 2.30072 1.5 2.72464 1.5 3.16667V5.66667M16.5 5.66667V3.16667C16.5 2.72464 16.3244 2.30072 16.0118 1.98816C15.6993 1.67559 15.2754 1.5 14.8333 1.5H12.3333M12.3333 16.5H14.8333C15.2754 16.5 15.6993 16.3244 16.0118 16.0118C16.3244 15.6993 16.5 15.2754 16.5 14.8333V12.3333M1.5 12.3333V14.8333C1.5 15.2754 1.67559 15.6993 1.98816 16.0118C2.30072 16.3244 2.72464 16.5 3.16667 16.5H5.66667"
        stroke={color ?? '#344054'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default CanvasIcon
