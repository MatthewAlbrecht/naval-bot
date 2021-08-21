import React from 'react'

People.aspectRatio = 40 / 28

export default function People(): React.ReactElement {
  return (
    <svg viewBox="0 0 40 28" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12C8.1875 12 10 10.25 10 8C10 5.8125 8.1875 4 6 4C3.75 4 2 5.8125 2 8C2 10.25 3.75 12 6 12ZM34 12C36.1875 12 38 10.25 38 8C38 5.8125 36.1875 4 34 4C31.75 4 30 5.8125 30 8C30 10.25 31.75 12 34 12ZM36 14H32C30.875 14 29.875 14.5 29.125 15.1875C31.6875 16.5625 33.4375 19.0625 33.875 22H38C39.0625 22 40 21.125 40 20V18C40 15.8125 38.1875 14 36 14ZM20 14C23.8125 14 27 10.875 27 7C27 3.1875 23.8125 0 20 0C16.125 0 13 3.1875 13 7C13 10.875 16.125 14 20 14ZM24.75 16H24.25C22.9375 16.625 21.5 17 20 17C18.4375 17 17 16.625 15.6875 16H15.1875C11.1875 16 8 19.25 8 23.25V25C8 26.6875 9.3125 28 11 28H29C30.625 28 32 26.6875 32 25V23.25C32 19.25 28.75 16 24.75 16ZM10.8125 15.1875C10.0625 14.5 9.0625 14 8 14H4C1.75 14 0 15.8125 0 18V20C0 21.125 0.875 22 2 22H6.0625C6.5 19.0625 8.25 16.5625 10.8125 15.1875Z"
        className="primaryFill"
      />
      <defs>
        <linearGradient
          xmlns="http://www.w3.org/2000/svg"
          id="gradient-fill"
          x1="0"
          y1="0"
          x2="40"
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
