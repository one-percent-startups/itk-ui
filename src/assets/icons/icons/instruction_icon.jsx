import React from 'react'

function InstructionIcon({ color }) {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99996 4.83333C9.99996 3.94928 9.64877 3.10143 9.02365 2.47631C8.39853 1.85119 7.55068 1.5 6.66663 1.5H1.66663V14H7.49996C8.163 14 8.79889 14.2634 9.26773 14.7322C9.73657 15.2011 9.99996 15.837 9.99996 16.5M9.99996 4.83333V16.5M9.99996 4.83333C9.99996 3.94928 10.3511 3.10143 10.9763 2.47631C11.6014 1.85119 12.4492 1.5 13.3333 1.5H18.3333V14H12.5C11.8369 14 11.201 14.2634 10.7322 14.7322C10.2634 15.2011 9.99996 15.837 9.99996 16.5"
        stroke={color ?? '#344054'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default InstructionIcon
