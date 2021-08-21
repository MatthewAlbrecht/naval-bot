import React from 'react'

Wink.aspectRatio = 34 / 34

export default function Wink(): React.ReactElement {
  return (
    <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.9992 33.8C26.2776 33.8 33.7992 26.2783 33.7992 17C33.7992 7.72157 26.2776 0.199951 16.9992 0.199951C7.72084 0.199951 0.199219 7.72157 0.199219 17C0.199219 26.2783 7.72084 33.8 16.9992 33.8Z"
        className="primaryFill"
      />
      <path
        d="M24.276 21.1993C23.538 22.4758 22.4771 23.5357 21.2 24.2726C19.9228 25.0094 18.4743 25.3973 16.9998 25.3973C15.5254 25.3973 14.0768 25.0095 12.7997 24.2726C11.5225 23.5358 10.4617 22.4759 9.72363 21.1995"
        className="primaryStroke primaryFill"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6996 15.6C11.8594 15.6 12.7996 14.6598 12.7996 13.5C12.7996 12.3402 11.8594 11.4 10.6996 11.4C9.53981 11.4 8.59961 12.3402 8.59961 13.5C8.59961 14.6598 9.53981 15.6 10.6996 15.6Z"
        className="primaryStroke"
        fill="#000534"
      />
      <path
        d="M21.1992 13.5H25.3992"
        className="primaryFill primaryStroke"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="gradient-fill"
          x1="-4.38642"
          y1="39.3602"
          x2="60.0029"
          y2="18.7458"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-left)" />
          <stop offset="0.776042" stopColor="var(--color-right)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
