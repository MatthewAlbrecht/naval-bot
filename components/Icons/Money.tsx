import React from 'react'

Money.aspectRatio = 34 / 34

export default function Money(): React.ReactElement {
  return (
    <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.9992 33.8C26.2776 33.8 33.7992 26.2783 33.7992 17C33.7992 7.72157 26.2776 0.199951 16.9992 0.199951C7.72084 0.199951 0.199219 7.72157 0.199219 17C0.199219 26.2783 7.72084 33.8 16.9992 33.8Z"
        className="primaryFill"
      />
      <path
        d="M17 7.19995V9.99995"
        className="primaryFill primaryStroke"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 24V26.8"
        className="primaryFill primaryStroke"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7994 24H19.0994C20.0277 24 20.9179 23.6313 21.5743 22.9749C22.2307 22.3185 22.5994 21.4283 22.5994 20.5C22.5994 19.5717 22.2307 18.6815 21.5743 18.0251C20.9179 17.3687 20.0277 17 19.0994 17H14.8994C13.9712 17 13.0809 16.6313 12.4245 15.9749C11.7682 15.3185 11.3994 14.4283 11.3994 13.5C11.3994 12.5717 11.7682 11.6815 12.4245 11.0251C13.0809 10.3687 13.9712 10 14.8994 10H21.1994"
        className="primaryFill primaryStroke"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
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
