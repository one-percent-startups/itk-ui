import React from 'react'

function ConsoleIcon({ color }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99996 1.66663L18.3333 7.08329M9.99996 1.66663L1.66663 7.08329M9.99996 1.66663V7.08329M18.3333 7.08329V12.9166M18.3333 7.08329L9.99996 12.9166M18.3333 12.9166L9.99996 18.3333M18.3333 12.9166L9.99996 7.08329M9.99996 18.3333L1.66663 12.9166M9.99996 18.3333V12.9166M1.66663 12.9166V7.08329M1.66663 12.9166L9.99996 7.08329M1.66663 7.08329L9.99996 12.9166"
        stroke={color ?? '#344054'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default ConsoleIcon
