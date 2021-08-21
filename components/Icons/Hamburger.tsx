import React from 'react'

Hamburger.aspectRatio = 24 / 16

export default function Hamburger(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
      <path
        className="primaryFill"
        d="M0 2.66667H24L24.0002 1.5L24 0H0L0.000162601 1.5L0 2.66667ZM24 13.3333H0V14.5V16H24L24 14.5L24 13.3333ZM24 6.66667H9.52196V8V9.33333H24L24.0002 8L24 6.66667Z"
      />
    </svg>
  )
}
