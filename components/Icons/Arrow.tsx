import React from 'react'

Arrow.aspectRatio = 10 / 10

export default function Arrow(): React.ReactElement {
  return (
    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.999513 5.00003L8.42808 5.00003L0.999513 5.00003ZM4.99951 9.00003L8.99951 5.00003L4.99951 1.00003"
        className="primaryFill"
      />
      <path
        d="M4.99951 9.00003L8.99951 5.00003L4.99951 1.00003M0.999513 5.00003L8.42808 5.00003L0.999513 5.00003Z"
        className="primaryStroke"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
