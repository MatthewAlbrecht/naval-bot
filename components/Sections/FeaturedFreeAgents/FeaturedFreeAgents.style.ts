import styled from 'styled-components'
import { bp, breakpoints } from 'styles/breakpoint'

export const FeaturedAvatar = styled.div`
  height: ${({ theme }) => theme.toRems(56)};
  min-height: ${({ theme }) => theme.toRems(56)};
  min-width: ${({ theme }) => theme.toRems(56)};
  width: ${({ theme }) => theme.toRems(56)};

  ${bp(breakpoints.md)} {
    height: ${({ theme }) => theme.toRems(82)};
    margin: 0 auto;
    min-height: ${({ theme }) => theme.toRems(82)};
    min-width: ${({ theme }) => theme.toRems(82)};
    width: ${({ theme }) => theme.toRems(82)};
  }

  ${bp(breakpoints.lg)} {
    height: ${({ theme }) => theme.toRems(89)};
    min-height: ${({ theme }) => theme.toRems(89)};
    min-width: ${({ theme }) => theme.toRems(89)};
    width: ${({ theme }) => theme.toRems(89)};
  }
`

export const CTA = styled.div`
  bottom: ${({ theme }) => theme.rhythm(2)};
  position: absolute;
  right: ${({ theme }) => theme.rhythm(2)};
  ${bp(breakpoints.md)} {
    align-self: flex-end;
    bottom: unset;
    margin-top: auto;
    position: unset;
    right: unset;
  }
`
