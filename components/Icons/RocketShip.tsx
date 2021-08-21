import React from 'react'

RocketShip.aspectRatio = 34 / 34

export default function RocketShip(): React.ReactElement {
  return (
    <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.0597 26.8995C9.07975 32.8392 1.16016 32.8392 1.16016 32.8392C1.16016 32.8392 1.16016 24.9196 7.09985 22.9397"
        className="primaryFill"
      />
      <path
        d="M28.8791 13.0402L16.9997 24.9196L9.08008 17L20.9595 5.12058C25.4577 0.62235 29.9559 0.666228 31.8743 0.952449C32.1697 0.996479 32.4431 1.13423 32.6542 1.34539C32.8654 1.55656 33.0032 1.82998 33.0472 2.12535C33.3334 4.04372 33.3773 8.54195 28.8791 13.0402Z"
        className="primaryFill"
      />
      <path
        opacity="0.4"
        d="M26.8995 15.0201V26.3196C26.8995 26.5034 26.8633 26.6855 26.7929 26.8553C26.7226 27.0252 26.6194 27.1795 26.4894 27.3095L20.8296 32.9693C20.6505 33.1485 20.426 33.2757 20.1802 33.3373C19.9344 33.399 19.6765 33.3927 19.434 33.3193C19.1915 33.2459 18.9734 33.108 18.8031 32.9204C18.6328 32.7328 18.5166 32.5024 18.4669 32.254L17 24.9196"
        className="primaryFill"
      />
      <path
        opacity="0.4"
        d="M18.9794 7.10052H7.67993C7.49608 7.10052 7.31402 7.13674 7.14417 7.20709C6.97431 7.27745 6.81998 7.38057 6.68998 7.51057L1.03017 13.1704C0.850988 13.3496 0.723798 13.574 0.662162 13.8198C0.600527 14.0656 0.606757 14.3235 0.680189 14.566C0.75362 14.8086 0.891499 15.0266 1.07912 15.1969C1.26674 15.3672 1.49708 15.4834 1.74556 15.5331L9.07993 17"
        className="primaryFill"
      />
      <defs>
        <linearGradient
          id="gradient-fill"
          x1="-0.190902"
          y1="34.4774"
          x2="18.78"
          y2="28.4038"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-left)" />
          <stop offset="0.776042" stopColor="var(--color-right)" />
        </linearGradient>
        <linearGradient
          id="gradient-fill"
          x1="5.79431"
          y1="28.9037"
          x2="51.9315"
          y2="14.1327"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-left)" />
          <stop offset="0.776042" stopColor="var(--color-right)" />
        </linearGradient>
        <linearGradient
          id="gradient-fill"
          x1="15.6489"
          y1="36.4175"
          x2="35.959"
          y2="32.9114"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-left)" />
          <stop offset="0.776042" stopColor="var(--color-right)" />
        </linearGradient>
        <linearGradient
          id="gradient-fill"
          x1="-1.88551"
          y1="18.6382"
          x2="26.7933"
          y2="1.61032"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-left)" />
          <stop offset="0.776042" stopColor="var(--color-right)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
