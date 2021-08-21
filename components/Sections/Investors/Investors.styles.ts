import styled, { css } from 'styled-components'
import { Box } from 'components'
import { BodyParagraph } from 'components/Txt'
import { bp, breakpoints } from 'styles/breakpoint'

export const AspectRatioLock = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;
`

export const ImageContainer = styled(Box).attrs((props) => ({
  all: [0],
  ...props,
}))`
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

type ImagePositionerProps = { nudgeRight?: number }

export const ImagePositioner = styled.div<ImagePositionerProps>`
  height: 100%;
  position: relative;

  ${bp(breakpoints.lg)} {
    ${({ nudgeRight, theme }) =>
      nudgeRight &&
      css`
        left: ${theme.toRems(nudgeRight)};
      `}
  }
`

export const InvestorListItem = styled(BodyParagraph)`
  padding-left: 2ch;

  &::before {
    color: ${({ theme }) => theme.color.blurple2};
    content: '&';
    left: ${({ theme }) => theme.toRems(-8)};
    margin-left: -1ch;
    position: relative;
    text-shadow: 0 0 0.5rem ${({ theme }) => theme.aColor('primaryButton', 80)};
  }
`
