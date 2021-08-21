import React from 'react'

OctoStarCheck.aspectRatio = 38 / 38
export default function OctoStarCheck(): React.ReactElement {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.13046 31.8693C4.51976 30.2586 5.58807 26.877 4.76824 24.8956C3.91837 22.8415 0.799805 21.1884 0.799805 18.9999C0.799805 16.8115 3.91839 15.1584 4.76825 13.1044C5.58809 11.1229 4.51976 7.74134 6.13046 6.13064C7.74116 4.51994 11.1228 5.58826 13.1042 4.76842C15.1583 3.91855 16.8114 0.799988 18.9999 0.799988C21.1883 0.799988 22.8414 3.91857 24.8954 4.76843C26.8769 5.58827 30.2585 4.51995 31.8692 6.13064C33.4799 7.74134 32.4115 11.1229 33.2314 13.1044C34.0812 15.1584 37.1998 16.8116 37.1998 19.0001C37.1998 21.1885 34.0812 22.8416 33.2314 24.8956C32.4115 26.877 33.4799 30.2586 31.8692 31.8693C30.2585 33.48 26.8768 32.4117 24.8954 33.2316C22.8414 34.0814 21.1882 37.2 18.9997 37.2C16.8113 37.2 15.1582 34.0814 13.1042 33.2315C11.1228 32.4117 7.74116 33.48 6.13046 31.8693Z"
        className="primaryFill"
      />
      <path
        d="M26.6998 14.8L16.4331 24.6L11.2998 19.7"
        className="primaryFill primaryStroke"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="gradient-fill"
          x1="-4.16797"
          y1="43.2236"
          x2="65.5871"
          y2="20.8913"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-left)" />
          <stop offset="0.776042" stopColor="var(--color-right)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
