import React from 'react'

function ExerciseIcon({ color }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19H19M14.5 2.49998C14.8978 2.10216 15.4374 1.87866 16 1.87866C16.2786 1.87866 16.5544 1.93353 16.8118 2.04014C17.0692 2.14674 17.303 2.303 17.5 2.49998C17.697 2.69697 17.8532 2.93082 17.9598 3.18819C18.0665 3.44556 18.1213 3.72141 18.1213 3.99998C18.1213 4.27856 18.0665 4.55441 17.9598 4.81178C17.8532 5.06915 17.697 5.303 17.5 5.49998L5 18L1 19L2 15L14.5 2.49998Z"
        stroke={color ?? '#344054'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default ExerciseIcon
