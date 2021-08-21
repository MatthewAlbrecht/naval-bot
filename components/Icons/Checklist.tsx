import React from 'react'

Checklist.aspectRatio = 24 / 32

export default function Checklist(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.5 0H1.5C0.625 0 0 0.6875 0 1.5V30.5C0 31.375 0.625 32 1.5 32H22.5C23.3125 32 24 31.375 24 30.5V1.5C24 0.6875 23.3125 0 22.5 0ZM8 25C8 25.5625 7.5 26 7 26H5C4.4375 26 4 25.5625 4 25V23C4 22.5 4.4375 22 5 22H7C7.5 22 8 22.5 8 23V25ZM8 17C8 17.5625 7.5 18 7 18H5C4.4375 18 4 17.5625 4 17V15C4 14.5 4.4375 14 5 14H7C7.5 14 8 14.5 8 15V17ZM8 9C8 9.5625 7.5 10 7 10H5C4.4375 10 4 9.5625 4 9V7C4 6.5 4.4375 6 5 6H7C7.5 6 8 6.5 8 7V9ZM20 24.5C20 24.8125 19.75 25 19.5 25H10.5C10.1875 25 10 24.8125 10 24.5V23.5C10 23.25 10.1875 23 10.5 23H19.5C19.75 23 20 23.25 20 23.5V24.5ZM20 16.5C20 16.8125 19.75 17 19.5 17H10.5C10.1875 17 10 16.8125 10 16.5V15.5C10 15.25 10.1875 15 10.5 15H19.5C19.75 15 20 15.25 20 15.5V16.5ZM20 8.5C20 8.8125 19.75 9 19.5 9H10.5C10.1875 9 10 8.8125 10 8.5V7.5C10 7.25 10.1875 7 10.5 7H19.5C19.75 7 20 7.25 20 7.5V8.5Z"
        className="primaryFill"
      />
      <defs>
        <linearGradient
          xmlns="http://www.w3.org/2000/svg"
          id="gradient-fill"
          x1="0"
          y1="0"
          x2="24"
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
