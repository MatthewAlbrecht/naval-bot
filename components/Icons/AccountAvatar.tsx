import React from 'react'

AccountAvatar.aspectRatio = 32 / 35

export default function AccountAvatar(): React.ReactElement {
  return (
    <svg viewBox="0 0 32 35" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.3998 18.4C20.4256 18.4 24.4998 14.3257 24.4998 9.29995C24.4998 4.27416 20.4256 0.199951 15.3998 0.199951C10.374 0.199951 6.2998 4.27416 6.2998 9.29995C6.2998 14.3257 10.374 18.4 15.3998 18.4Z"
        className="primaryFill"
      />
      <path
        d="M15.68 18.4C7.02017 18.4 0 25.4201 0 34.08H31.36C31.36 25.4201 24.3398 18.4 15.68 18.4Z"
        className="primaryFill"
      />
      <defs>
        <linearGradient
          id="gradient-fill"
          x1="3.81591"
          y1="21.4117"
          x2="38.6935"
          y2="10.2456"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-left)" />
          <stop offset="0.776042" stopColor="var(--color-right)" />
        </linearGradient>
        <linearGradient
          id="gradient-fill"
          x1="-4.27993"
          y1="36.6747"
          x2="42.7108"
          y2="6.58632"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-left)" />
          <stop offset="0.776042" stopColor="var(--color-right)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
