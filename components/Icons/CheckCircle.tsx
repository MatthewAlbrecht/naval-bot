import React from 'react'

CheckCircle.aspectRatio = 18 / 18

export default function CheckCircle(): React.ReactElement {
  return (
    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
        className="primaryFill"
      />
      <path
        d="M13.125 6.75L7.62497 12L4.875 9.375"
        stroke="white"
        className="primaryStroke primaryFill"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
