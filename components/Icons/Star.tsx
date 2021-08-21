import React from 'react'

Star.aspectRatio = 34 / 33

export default function Star(): React.ReactElement {
  return (
    <svg viewBox="0 0 34 33" xmlns="http://www.w3.org/2000/svg">
      <path
        className="primaryFill"
        d="M15.1875 1.125L11.125 9.4375L1.9375 10.75C0.3125 11 -0.3125 13 0.875 14.1875L7.4375 20.625L5.875 29.6875C5.625 31.3125 7.375 32.5625 8.8125 31.8125L17 27.5L25.125 31.8125C26.5625 32.5625 28.3125 31.3125 28.0625 29.6875L26.5 20.625L33.0625 14.1875C34.25 13 33.625 11 32 10.75L22.875 9.4375L18.75 1.125C18.0625 -0.3125 15.9375 -0.375 15.1875 1.125Z"
      />
      <defs>
        <linearGradient
          xmlns="http://www.w3.org/2000/svg"
          id="gradient-fill"
          x1="0"
          y1="0"
          x2="34"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--color-left)" />
          <stop offset="1" stopColor="var(--color-right)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
