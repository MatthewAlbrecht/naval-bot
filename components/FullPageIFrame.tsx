import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

const StyledFullPageIFrame = styled.main`
  html {
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

  iframe {
    border: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export default function FullPageIFrame({ children }: Props): React.ReactElement {
  return <StyledFullPageIFrame>{children}</StyledFullPageIFrame>
}
